'use client'
import Link from "next/link";
import {LogOut, Moon, Settings, Sun, User} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {SidebarTrigger} from "@/components/ui/sidebar";
const Navbar=()=>{
    const { setTheme } = useTheme()
    return(
        <div className={'flex p-4 item-center justify-between sticky top-0 bg-background z-10'}>
            {/*left*/}
            {/*sidbarTrigger*/}
            {/*collapsbutton*/}
            <SidebarTrigger/>
            {/*right*/}
            <div className={'flex items-center gap-4'}>
                <Link href={'/'}>Dashboard</Link>
                {/*user menu*/}
                {/*theme menu*/}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>



                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={10}>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                                profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                                settings
                            </DropdownMenuItem>
                            <DropdownMenuItem variant={'destructive'}>
                                <LogOut className={'h-[1.2rem] w-[1.2rem] mr-2'}/>
                                Logout
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

            </div>
        </div>
    )
}
export default Navbar;