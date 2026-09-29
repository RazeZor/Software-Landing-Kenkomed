'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

interface AppointmentPickerProps {
  date?: Date
  setDate: (date: Date | undefined) => void
  time?: string
  setTime: (time: string | undefined) => void
  className?: string
}

export function AppointmentPicker({
  date,
  setDate,
  time,
  setTime,
  className,
}: AppointmentPickerProps) {
  // Generate time slots every 30 minutes from 09:00 to 18:00
  const timeSlots = React.useMemo(() => {
    const slots = []
    for (let i = 9; i <= 18; i++) {
      slots.push(`${i.toString().padStart(2, '0')}:00`)
      if (i !== 18) slots.push(`${i.toString().padStart(2, '0')}:30`)
    }
    return slots
  }, [])

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row rounded-xl border border-zinc-800 bg-[#111111] text-zinc-100 shadow-2xl overflow-hidden w-fit',
        className
      )}
    >
      <div className="p-4 sm:p-5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-transparent text-zinc-100 p-0"
          classNames={{
            months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
            month: 'space-y-4',
            caption_label: 'text-sm font-medium',
            nav: 'space-x-1 flex items-center',
            button_previous: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-zinc-400',
            button_next: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-zinc-400',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell: 'text-zinc-500 rounded-md w-9 font-normal text-[0.8rem]',
            row: 'flex w-full mt-2',
            cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-zinc-800/50 [&:has([aria-selected])]:bg-zinc-800 focus-within:relative focus-within:z-20',
            day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50 rounded-md transition-colors',
            day_range_end: 'day-range-end',
            day_selected: 'bg-zinc-100 text-zinc-950 hover:bg-zinc-100 hover:text-zinc-950 focus:bg-zinc-100 focus:text-zinc-950 font-medium',
            day_today: 'bg-zinc-800 text-zinc-50',
            day_outside: 'day-outside text-zinc-600 opacity-50 aria-selected:bg-zinc-800/50 aria-selected:text-zinc-500 aria-selected:opacity-30',
            day_disabled: 'text-zinc-600 opacity-50',
            day_range_middle: 'aria-selected:bg-zinc-800 aria-selected:text-zinc-50',
            day_hidden: 'invisible',
          }}
        />
      </div>

      <div className="w-full sm:w-[220px] border-t sm:border-t-0 sm:border-l border-zinc-800/60 p-4 sm:p-5 flex flex-col">
        <div className="mb-4 text-sm font-medium text-zinc-200">
          {date ? format(date, 'EEEE, d') : 'Select a date'}
        </div>
        
        <ScrollArea className="h-[280px] w-full pr-4 -mr-4">
          <div className="flex flex-col gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                variant="outline"
                className={cn(
                  "w-full justify-center font-normal border-zinc-800/80 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-all rounded-md h-10",
                  time === slot && "border-zinc-500 bg-zinc-800 text-zinc-100 font-medium",
                  !date && "opacity-50 cursor-not-allowed"
                )}
                disabled={!date}
                onClick={() => setTime(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
