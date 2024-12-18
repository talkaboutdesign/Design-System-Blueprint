import { Button } from "./components/ui/button"
import { ThemeToggle } from "./components/theme-toggle"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Design System Blueprint</h1>
          
          <div className="prose prose-slate dark:prose-invert mb-12">
            <p className="text-muted-foreground text-lg">
              A template for building your own design system using React, TypeScript, and Tailwind CSS.
              This project is built on top of{" "}
              <a 
                href="https://ui.shadcn.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                shadcn/ui
              </a>
              , a collection of re-usable components built using Radix UI and Tailwind CSS.
            </p>

            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">What is shadcn/ui?</h2>
              <p className="text-muted-foreground">
                shadcn/ui is not a component library, but rather a collection of re-usable components that you can copy and 
                paste into your apps. The components are styled using Tailwind CSS and are built with accessibility in mind.
                This approach gives you complete control over your components and their styling.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8">Getting Started</h2>
              <p className="text-muted-foreground">
                This template includes a basic setup with an example Button component. You can find the button implementation
                in <code className="text-sm">src/components/ui/button</code>. Use this as a reference for adding more components
                from shadcn/ui to your project.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Button Component Example</h2>
              <p className="text-muted-foreground mb-4">
                Below is an example of the Button component with different variants and sizes. 
                Check out the implementation to see how it's built.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4 text-foreground">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>

              <h3 className="text-lg font-medium mb-4 text-foreground pt-4">Button Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">👋</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
