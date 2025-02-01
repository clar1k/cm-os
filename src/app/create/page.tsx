"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";
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

function CustomizeManagerForm({
  onProgressChange,
}: {
  onProgressChange: (progress: number) => void;
}) {
  const [bio, setBio] = useState("");
  const [lore, setLore] = useState("");
  const [knowledge, setKnowledge] = useState("");

  useEffect(() => {
    const totalFields = 3;
    const filledFields = [bio, lore, knowledge].filter(
      (field) => field.trim() !== "",
    ).length;
    const progress = (filledFields / totalFields) * 100;
    onProgressChange(progress);
  }, [bio, lore, knowledge, onProgressChange]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-white bg-black font-mono text-white transition-colors hover:bg-white hover:text-black"
        >
          Create Community Manager
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-white bg-black font-mono text-white sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="mb-2 text-center text-xl tracking-tight">
            Customize Community Manager
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Configure your AI community manager
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="bio" className="text-sm text-gray-300">
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Enter bio"
                className="h-20 resize-none border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:border-white"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lore" className="text-sm text-gray-300">
                Lore
              </Label>
              <Textarea
                id="lore"
                placeholder="Enter lore for community manager"
                className="h-20 resize-none border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:border-white"
                value={lore}
                onChange={(e) => setLore(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="knowledge" className="text-sm text-gray-300">
              Knowledge Base
            </Label>
            <Textarea
              id="knowledge"
              placeholder="Enter knowledge base for your agent"
              className="h-20 resize-none border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:border-white"
              value={knowledge}
              onChange={(e) => setKnowledge(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-8 w-24 border-2 border-white bg-black text-xs text-white transition-colors hover:bg-white hover:text-black"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-8 w-24 border-2 border-white bg-white text-xs text-black transition-colors hover:bg-black hover:text-white"
            >
              Submit
            </Button>
          </div>
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
  const [name, setName] = useState("");
  const [ticker, setTicker] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const totalFields = 3;
    const filledFields = [name, ticker, image].filter(
      (field) => field !== null && field !== "",
    ).length;
    const progress = (filledFields / totalFields) * 100;
    onProgressChange(progress);
  }, [name, ticker, image, onProgressChange]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-white bg-black font-mono text-white transition-colors hover:bg-white hover:text-black"
        >
          Add Token Data
        </Button>
      </DialogTrigger>
      <DialogContent className="border-2 border-white bg-black font-mono text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="mb-2 text-center text-xl tracking-tight">
            Rivens data for token
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-400">
            Enter your token details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter name"
              className="h-10 border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:border-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ticker" className="text-sm text-gray-300">
              Ticker
            </Label>
            <Input
              id="ticker"
              placeholder="Enter ticker"
              className="h-10 border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:border-white"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="logo" className="text-sm text-gray-300">
              Logo
            </Label>
            <div className="flex items-center gap-4">
              <UploadButton
                className="rounded-lg border-2 border-dashed border-gray-700 p-4 transition-colors hover:border-white/40"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  setImage(res[0].url);
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-8 w-24 border-2 border-white bg-black text-xs text-white transition-colors hover:bg-white hover:text-black"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-8 w-24 border-2 border-white bg-white text-xs text-black transition-colors hover:bg-black hover:text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function CreateAgent() {
  const [managerProgress, setManagerProgress] = useState(0);
  const [tokenProgress, setTokenProgress] = useState(0);
  const { setShowAuthFlow } = useDynamicContext();
  const isLoggedIn = useIsLoggedIn();
  return (
    <div className="relative min-h-screen bg-black p-8 font-mono text-white">
      <div className="mb-8 text-center text-3xl font-bold">
        Create your agent
      </div>
      {!isLoggedIn && (
        <Button
          onClick={() => setShowAuthFlow(true)}
          className="absolute right-6 top-8"
        >
          Connect your wallet
        </Button>
      )}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          0% <span>100%</span>
        </div>
        <Progress
          value={(managerProgress + tokenProgress) / 2}
          className="h-2 w-full bg-gray-700"
        >
          <div
            className="h-full bg-white transition-all"
            style={{ width: `${(managerProgress + tokenProgress) / 2}%` }}
          />
        </Progress>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Customize Manager</h2>
          <div className="mb-2 flex items-center justify-between">
            <CustomizeManagerForm onProgressChange={setManagerProgress} />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">Token Data (Rivens)</h2>
          <div className="mb-2 flex items-center justify-between">
            <TokenDataForm onProgressChange={setTokenProgress} />
          </div>
        </div>
      </div>
      <Button
        type="submit"
        className="mt-6 h-12 w-32 border-2 border-white bg-white text-xl text-black transition-colors hover:bg-black hover:text-white"
      >
        Submit
      </Button>
    </div>
  );
}
