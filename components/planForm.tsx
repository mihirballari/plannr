"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlanForm() {
  const [major, setMajor] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (major.trim() !== "") {
      const sanitized = major.trim().toLowerCase().replace(/\s+/g, "");
      router.push(`/plan/${sanitized}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-2xl mx-auto border-2 border-red-100 shadow-2xl backdrop-blur-sm bg-white/95 relative">
        <CardContent className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Speedrun your academic planning</h3>
          <div className="grid gap-6 md:grid-cols-1">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Major</label>
              <input
                type="text"
                placeholder="e.g. CS, Math"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className="w-full px-3 py-2 border border-red-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none bg-white/80"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg shadow-lg">
            Plan
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
