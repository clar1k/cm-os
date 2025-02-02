"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { UploadButton } from "~/lib/uploadthing";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { Sparkles, Bot, Coins, FileJson } from "lucide-react";
import { createContext, useContext } from "react";
import { toast } from "sonner";

interface FormData {
  bio: string;
  lore: string;
  name: string;
  ticker: string;
  logoUrl: string;
  botApiToken: string;
}

const FormContext = createContext<{
  formData: FormData;
  setFormData: (data: FormData) => void;
}>({
  formData: {
    bio: "",
    lore: "",
    name: "",
    ticker: "",
    logoUrl: "",
    botApiToken: "",
  },
  setFormData: () => {
    console.warn("FormContext not yet initialized");
  },
});

function CustomizeManagerForm({
  onProgressChange,
}: {
  onProgressChange: (progress: number) => void;
}) {
  const { formData, setFormData } = useContext(FormContext);
  const { bio, lore } = formData;

  useEffect(() => {
    const totalFields = 3;
    const filledFields = [bio, lore].filter(
      (field) => field.trim() !== "",
    ).length;
    const progress = (filledFields / totalFields) * 100;
    onProgressChange(progress);
  }, [bio, lore, onProgressChange]);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-black/50 px-8 py-5 text-xl text-white backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-orange-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <Bot
            style={{
              width: 24,
              height: 24,
            }}
            className="mr-2 inline-block"
          />
          Customize
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-black/90 text-white backdrop-blur-xl sm:max-w-[700px]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/20 via-transparent to-orange-500/20 opacity-50" />
        <DialogHeader className="relative">
          <DialogTitle className="mb-2 text-center text-2xl font-bold tracking-tight">
            <Sparkles className="mr-2 inline-block h-5 w-5" />
            Customize Community Manager
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Configure your AI community manager with personality and knowledge
          </DialogDescription>
        </DialogHeader>
        <div className="relative grid gap-6 py-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="group grid gap-2">
              <Label
                htmlFor="bio"
                className="text-sm font-medium text-gray-300"
              >
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Enter bio"
                className="h-20 resize-none rounded-lg border-gray-800 bg-black/50 text-white placeholder-gray-600 backdrop-blur-sm transition-all focus:border-white/40 focus:bg-black/70 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:ring-0"
                value={bio}
                onChange={(e) => updateField("bio", e.target.value)}
              />
            </div>
            <div className="group grid gap-2">
              <Label
                htmlFor="lore"
                className="text-sm font-medium text-gray-300"
              >
                Lore
              </Label>
              <Textarea
                id="lore"
                placeholder="Enter lore for community manager"
                className="h-20 resize-none rounded-lg border-gray-800 bg-black/50 text-white placeholder-gray-600 backdrop-blur-sm transition-all focus:border-white/40 focus:bg-black/70 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:ring-0"
                value={lore}
                onChange={(e) => updateField("lore", e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex items-center justify-end gap-3">
          <Button
            variant="outline"
            className="rounded-lg border-2 border-white/20 bg-black/50 px-6 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-lg bg-white px-6 font-medium text-black transition-all hover:bg-white"
          >
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TokenDataForm({
  onProgressChange,
}: {
  onProgressChange: (progress: number) => void;
}) {
  const { formData, setFormData } = useContext(FormContext);
  const { name, ticker, logoUrl } = formData;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:black group relative overflow-hidden rounded-xl border-2 border-white/20 bg-black/50 px-8 py-5 text-xl text-white backdrop-blur-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <Coins
            style={{
              width: 24,
              height: 24,
            }}
            className="mr-2 inline-block text-white group-hover:text-black"
          />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="border-none bg-black/90 text-white backdrop-blur-xl sm:max-w-[500px]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-transparent to-teal-500/20 opacity-50" />
        <DialogHeader className="relative">
          <DialogTitle className="mb-2 text-center text-2xl font-bold tracking-tight">
            <Coins className="mr-2 inline-block h-5 w-5 text-white" />
            Rivens Token Data
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Configure your token details and branding
          </DialogDescription>
        </DialogHeader>
        <div className="relative grid gap-6 py-4">
          <div className="group grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter name"
              className="rounded-lg border-gray-800 bg-black/50 text-white placeholder-gray-600 backdrop-blur-sm transition-all focus:border-white/40 focus:bg-black/70 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:ring-0"
              value={name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>
          <div className="group grid gap-2">
            <Label
              htmlFor="ticker"
              className="text-sm font-medium text-gray-300"
            >
              Ticker
            </Label>
            <Input
              id="ticker"
              placeholder="Enter ticker"
              className="rounded-lg border-gray-800 bg-black/50 text-white placeholder-gray-600 backdrop-blur-sm transition-all focus:border-white/40 focus:bg-black/70 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:ring-0"
              value={ticker}
              onChange={(e) => updateField("ticker", e.target.value)}
            />
          </div>
          <div className="group grid gap-2">
            <Label htmlFor="logo" className="text-sm font-medium text-gray-300">
              Logo
            </Label>
            <div className="flex items-center gap-4">
              <UploadButton
                className="rounded-lg border-2 border-dashed border-gray-800 bg-black/50 p-4 transition-all hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  const imageUrl = res[0]?.url;
                  if (imageUrl) {
                    updateField("logoUrl", imageUrl);
                  }
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          </div>
        </div>
        <div className="relative mt-6 flex items-center justify-end gap-3">
          <Button
            variant="outline"
            className="rounded-lg border-2 border-white/20 bg-black/50 px-6 font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-lg bg-white px-6 font-medium text-black transition-all hover:bg-white"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const promise = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Successfully deployed agent" }), 4500),
  );

export default function CreateAgent() {
  const [managerProgress, setManagerProgress] = useState(0);
  const [tokenProgress, setTokenProgress] = useState(0);
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  const [formData, setFormData] = useState<FormData>({
    bio: "",
    lore: "",
    name: "",
    ticker: "",
    logoUrl: "",
    botApiToken: "",
  });

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result;
          if (typeof result !== "string") {
            throw new Error("Failed to read file as text");
          }

          const jsonData = JSON.parse(result) as Partial<FormData>;
          setFormData({
            bio: jsonData.bio ?? "",
            lore: jsonData.lore ?? "",
            name: jsonData.name ?? "",
            ticker: jsonData.ticker ?? "",
            logoUrl: jsonData.logoUrl ?? "",
            botApiToken: jsonData.botApiToken ?? "",
          });
          setTokenProgress(100);
          setManagerProgress(100);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
          alert("Invalid JSON file format");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black p-8 font-sans text-white">
      <FormContext.Provider value={{ formData, setFormData }}>
        <div className="relative">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 text-4xl font-bold tracking-tight">
              <Sparkles className="mr-2 inline-block h-8 w-8 animate-pulse text-white" />
              Create your agent
            </div>
            <p className="mt-2 text-gray-400">
              Configure your AI community manager and token details
            </p>
          </div>

          <div className="mb-12">
            <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
              <span>Progress</span>
              <span>{Math.round((managerProgress + tokenProgress) / 2)}%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-gray-800">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-orange-500 transition-all duration-500"
                style={{ width: `${(managerProgress + tokenProgress) / 2}%` }}
              />
            </div>
          </div>
          <div className="mb-6 flex">
            <label className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-white/20 bg-black/50 px-8 py-3 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
              <div className="flex items-center gap-2">
                <FileJson className="h-5 w-5" />
                <span>Import JSON</span>
              </div>
            </label>
          </div>
          <div className="grid gap-8">
            <div>
              <div className="mb-6 flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <Bot
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  className="text-white"
                />
                <span className="text-2xl leading-none">Customize Manager</span>
              </div>
              <CustomizeManagerForm onProgressChange={() => {}} />
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                <Coins className="mr-2 inline-block h-6 w-6 text-white" />
                Token Data (Rivens)
              </h2>
              <TokenDataForm onProgressChange={() => {}} />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Label htmlFor="bio" className="text-sm font-medium text-gray-300">
              Bot Api Token
            </Label>
            <Input
              placeholder="Enter bot api token"
              value={formData.botApiToken}
              onChange={(e) =>
                setFormData({ ...formData, botApiToken: e.target.value })
              }
              className="group relative overflow-hidden rounded-xl border-2 border-white/20 bg-black/50 px-8 py-5 text-xl text-white backdrop-blur-sm transition-all hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
          </div>
          <div className="mt-12 text-center">
            <Button
              type="submit"
              onClick={() => {
                toast.promise(promise, {
                  loading: "Processing transaction...",
                  success: "Successfully deployed agent",
                  error: "Failed to deploy agent",
                });
              }}
              className="rounded-xl bg-white px-12 py-6 text-lg font-medium tracking-tight text-black transition-all hover:bg-white"
            >
              Create
            </Button>
          </div>
        </div>
      </FormContext.Provider>
    </div>
  );
}
