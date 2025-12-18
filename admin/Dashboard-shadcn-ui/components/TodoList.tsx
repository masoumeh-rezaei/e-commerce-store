'use client'
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {Calendar} from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";

import React from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";

const TodoList = ( ) =>{
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [open,setOpen] = React.useState(false);
    return(
        <div className={''}>
            <h1 className={'text-lg mb-6 font-medium '}>ToDo List</h1>
           <Popover open={open} onOpenChange={setOpen}>
               <PopoverTrigger asChild>
                   <Button className={'w-full'}>
                       <CalendarIcon/>
                       {date ? format(date,"PPP") :<span>Pick a date</span>}
                   </Button>
               </PopoverTrigger>
               <PopoverContent className={'p-0 w-auto'}>
                   <Calendar
                       mode="single"
                       selected={date}
                       onSelect={(date)=>{
                           setDate(date);
                           setOpen(false);
                       }}
                       className="rounded-lg border"
                   />
               </PopoverContent>
           </Popover>
        {/*list*/}
            <ScrollArea className={'max-h-[400px]  mt-4 overflow-y-auto '}>
               <div className={'flex flex-col gap-4'}>
                   {/*listitem*/}
                   <Card className={'p-4'}>
                       <div className={'flex item-center gap-4'}>
                           <Checkbox id={'item1'} checked={ true }/>
                           <Label htmlFor="item-1" className="text-sm text-muted-foreground">
                               Lorem ipsum dolor sit amet...
                           </Label>
                       </div>

                   </Card>
                   {/*listitem*/}
                   <Card className={'p-4'}>
                       <div className={'flex item-center gap-4'}>
                           <Checkbox id={'item1'} />
                           <Label htmlFor={'item1'} className={'text-sm text-muted-foreground '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facere!
                           </Label>
                       </div>

                   </Card>
                   {/*listitem*/}
                   <Card className={'p-4'}>
                       <div className={'flex item-center gap-4'}>
                           <Checkbox id={'item1'} />
                           <Label htmlFor={'item1'} className={'text-sm text-muted-foreground '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facere!
                           </Label>
                       </div>

                   </Card>
                   {/*listitem*/}
                   <Card className={'p-4'}>
                       <div className={'flex item-center gap-4'}>
                           <Checkbox id={'item1'} />
                           <Label htmlFor={'item1'} className={'text-sm text-muted-foreground '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facere!
                           </Label>
                       </div>

                   </Card>
               </div>
            </ScrollArea>
        </div>
    )

}
export default TodoList;