import React from "react";
import { Home, Layers, Compass, Star, Owl } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarInput,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";
export function AppSidebar(): JSX.Element {
  return (
    <Sidebar className="border-r border-white/10">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-glow">
            <Owl className="h-5 w-5 text-white" />
          </div>
          <span className="text-base font-bold text-white tracking-tight">Owlnexa <span className="text-indigo-400 text-xs">Console</span></span>
        </div>
        <div className="mt-4 px-2">
          <SidebarInput placeholder="Search intelligence..." className="bg-slate-900 border-white/10" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <a href="#"><Home /> <span>Dashboard</span></a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><Layers /> <span>AI Models</span></a>
              </SidebarMenuButton>
              <SidebarMenuAction>
                <Star className="size-4" />
              </SidebarMenuAction>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><Compass /> <span>Analytics</span></a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator className="bg-white/5" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-500 font-bold uppercase text-[10px] tracking-widest px-4">Resources</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><Star /> <span>Deployments</span></a>
              </SidebarMenuButton>
              <SidebarMenuBadge className="bg-indigo-500/20 text-indigo-400 border-none">12</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-white/5 bg-slate-950/50">
        <div className="px-2 text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
          Owlnexa Intelligence System
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}