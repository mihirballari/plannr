"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PlanForm from "../components/planForm";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-5">
          <div className="grid grid-cols-3 gap-8 p-8">
            {/* Mock schedule grid */}
            <div className="space-y-4">
              <div className="h-16 bg-red-200 rounded-lg"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
              <div className="h-20 bg-red-200 rounded-lg"></div>
              <div className="h-8 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded-lg"></div>
              <div className="h-24 bg-red-200 rounded-lg"></div>
              <div className="h-8 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-red-200 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-20 bg-red-200 rounded-lg"></div>
              <div className="h-8 bg-gray-200 rounded-lg"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-red-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-6 md:p-8 relative z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 tracking-tight">plannr</h1>
        </div>
        <div className="flex items-center">
          <div className="w-15 h-15 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-4 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Message */}
          <div className="space-y-8 mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Tired of Juggling <span className="text-red-600">WebReg</span>, <span className="text-red-600">CSP</span>{" "}
              & <span className="text-red-600">DegreeNav</span>?
            </h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-red-600 blur-lg opacity-20 scale-110"></div>
              <p className="relative text-3xl md:text-4xl font-bold text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-sm">
                use plannr
              </p>
            </div>
          </div>

          {/* Academic Planning Form */}
          <div className="relative mb-6">
            {/* Soft glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/30 via-red-50/40 to-red-100/30 blur-3xl transform scale-110"></div>

            <PlanForm/>
          </div>

          {/* Class Search Form */}
          <div className="relative">
            {/* Soft glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/30 via-red-50/40 to-red-100/30 blur-3xl transform scale-110"></div>

            <Card className="max-w-2xl mx-auto border-2 border-red-100 shadow-2xl backdrop-blur-sm bg-white/95 relative">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Or search for a class directly</h3>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Try searching: 'easy 3-credit electives for finance majors'"
                    className="w-full px-3 py-2 border border-red-200 rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none bg-white/80"
                  />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-lg shadow-lg">
                  Search
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900">Unified Planning</h4>
              <p className="text-gray-600 text-sm">
                All your academic tools in one place - no more switching between multiple systems
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900">Smart Scheduling</h4>
              <p className="text-gray-600 text-sm">
                Intelligent course recommendations based on your major and graduation requirements
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-gray-900">Progress Tracking</h4>
              <p className="text-gray-600 text-sm">
                Clear visualization of your degree progress and remaining requirements
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-100 py-8 relative z-10">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>Made for Rutgers students, by Rutgers students</p>
        </div>
      </footer>
    </div>
  )
}
