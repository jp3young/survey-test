"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  className?: string;
}

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  className?: string;
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  className?: string;
}

const Tabs = TabsPrimitive.Root

const TabsList = ({ className = "", ...props }: TabsListProps) => (
  <TabsPrimitive.List
    className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 ${className}`}
    {...props}
  />
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = ({ className = "", ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${className}`}
    {...props}
  />
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = ({ className = "", ...props }: TabsContentProps) => (
  <TabsPrimitive.Content
    className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${className}`}
    {...props}
  />
)
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }