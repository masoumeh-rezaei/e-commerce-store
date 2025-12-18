import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import CardList from "@/components/CardList";

import {BadgeCheck, Candy, Car, Shield} from "lucide-react";

import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import EditUser from "@/components/EditUser";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avator";
import AppLineChart from "@/components/AppLineChart";
const SingleUserPage=()=>{
    return(
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Masoomeh Rezaei</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/*container*/}
            <div className={'mt-3 flex flex-col xl:flex-row gap-8'}>
                {/*left*/}
                <div className={'w-ful xl:w-1/3 space-y-6'}>
                  {/*user badge content*/}
                    <div className={'bg-primary-foreground p-4 rounded-lg'}>
                        <h1 className={'font-semibold text-xl'}>User Badges</h1>
                        <div className={'flex gap-4 mt-4'}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size="36" className={'rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 '}/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className={'font-bold mb-2'}>Verified User</h1>
                                    <p className={'text-sm text-muted-foreground'}>this user has been verified by admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size="36" className={'rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 '}/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className={'font-bold mb-2'}>Verified User</h1>
                                    <p className={'text-sm text-muted-foreground'}>this user has been verified by admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size="36" className={'rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 '}/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className={'font-bold mb-2'}>Verified User</h1>
                                    <p className={'text-sm text-muted-foreground'}>this user has been verified by admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Car size="36" className={'rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 '}/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className={'font-bold mb-2'}>Verified User</h1>
                                    <p className={'text-sm text-muted-foreground'}>this user has been verified by admin</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/*user card container*/}
                    <div className={'bg-primary-foreground p-4 rounded-lg space-y-2'}>
                        <div className={'flex items-center gap-2'}>
                            <Avatar className={'size-9'}>
                                <AvatarImage src={'https://avatars.githubusercontent.com/u/1486366'}/>
                                <AvatarFallback>MR</AvatarFallback>
                            </Avatar>
                            <h1 className={'text-xl font-semibold'}>Masoomeh Rezaei</h1>
                        </div>
                        <p className={'text-sm text-muted-foreground'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eveniet exercitationem laudantium omnis perspiciatis placeat quia ullam, veritatis! Eos laboriosam, magni? A doloribus excepturi inventore ipsa mollitia, quaerat quam sapiente.
                        </p>
                    </div>
                    {/*info  content*/}
                    <div className={'bg-primary-foreground p-4 rounded-lg'}>
                        <div className={'flex items-center justify-between '}>
                            <h1 className={'font-semibold text-xl'}>User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                                <EditUser/>
                            </Sheet>
                        </div>
                        <div className={'space-y-4 mt-4'}>
                            <div className={'flex flex-col gap-2 mb-8'}>
                                <p className={'text-muted-foreground text-sm '}>Profile Complition</p>
                                <Progress value={83} />
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <span className={'font-bold'}>Full name : </span>
                                <span>Masy Rezaei</span>
                            </div> <div className={'flex items-center gap-2'}>
                                <span className={'font-bold'}>Email : </span>
                                <span>Masy.Rezaei@gmail.com</span>
                            </div> <div className={'flex items-center gap-2'}>
                                <span className={'font-bold'}>Phone : </span>
                                <span>09106765667</span>
                            </div> <div className={'flex items-center gap-2'}>
                                <span className={'font-bold'}>Address : </span>
                                <span>Iran , Tehran</span>
                            </div> <div className={'flex items-center gap-2'}>
                                <span className={'font-bold'}>city : </span>
                            <span>Tehran</span>
                            </div>
                        </div>
                        <p className={'text-sm text-muted-foreground mt-3'}>Joined on 2025.05.05</p>
                    </div>
                    {/*cartList*/}

                </div>
                {/*right*/}
                <div className={'w-ful xl:w-2/3 space-y-6'}>

                    {/*chart container*/}
                    <div className={'bg-primary-foreground p-4 rounded-lg'}>
                        <h1 className={'text-xl font-semibold'}>User Activity</h1>
                        <AppLineChart/>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default SingleUserPage;