import { useState } from "react";
import {
  CalendarIcon,
  Check,
  ChevronsUpDown,
  Copy,
  Edit,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import MultipleInfoRow from "./MultipleInfoRow";



// const candidateStatus = [
//   { value: "Not Contacted", label: "Not Contacted" },
//   { value: "In process", label: "In process" },
//   { value: "1 unresponsive - Wsent", label: "1 unresponsive - Wsent" },
//   { value: "Contacted, ETC Sent", label: "Contacted, ETC Sent" },
//   { value: "TA Interview", label: "TA Interview" },
//   { value: "Hired", label: "Hired" },
//   { value: "Discarded", label: "Discarded" },
// ];

// const englishLevel = [
//   { value: "10", label: "10" },
//   { value: "9", label: "9" },
//   { value: "8", label: "8" },
//   { value: "7", label: "7" },
//   { value: "1, 2, 3, 4, 5, 6", label: "0 to 6" },
// ];

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
      <p className="text-sm font-semibold text-foreground capitalize">
        {label}
      </p>
      <HoverCard>
        <HoverCardTrigger className="min-w-0">
          <p className="text-sm text-primary truncate">{value}</p>
        </HoverCardTrigger>
        <HoverCardContent className="text-sm text-foreground flex">
          {value}
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 box-border"
            onClick={() => {}}
          >
            <Edit size={14} />
          </Button>
        </HoverCardContent>
      </HoverCard>
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 box-border"
        onClick={() => {}}
      >
        <Copy size={10} />
      </Button>
    </div>
  );
}

// function LanguagesRow({
//   languages,
//   updateLanguages,
// }: {
//   languages: string[];
//   updateLanguages: (languages: string[]) => void;
// }) {
//   const [newLanguage, setNewLanguage] = useState("");

//   const addLanguage = () => {
//     if (newLanguage) {
//       updateLanguages([...languages, newLanguage]);
//       setNewLanguage("");
//     }
//   };

//   const removeLanguage = (index: number) => {
//     updateLanguages(languages.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="grid grid-cols-[70px_auto] gap-x-3 px-5 items-start">
//       <p className="text-sm font-semibold text-foreground">Languages</p>
//       <HoverCard>
//         <HoverCardTrigger className="min-w-0">
//           <p className="text-sm text-primary truncate">
//             {languages.join(", ")}
//           </p>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-80">
//           <div className="space-y-2">
//             <div className="flex flex-wrap gap-2">
//               {languages.map((language, index) => (
//                 <Badge
//                   key={index}
//                   variant="secondary"
//                   className="flex items-center space-x-1"
//                 >
//                   <span>{language}</span>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-4 w-4 p-0"
//                     onClick={() => removeLanguage(index)}
//                   >
//                     <Trash2 size={10} />
//                   </Button>
//                 </Badge>
//               ))}
//             </div>
//             <div className="flex items-center space-x-2">
//               <Input
//                 value={newLanguage}
//                 onChange={(e) => setNewLanguage(e.target.value)}
//                 placeholder="Add new language"
//                 className="h-8"
//               />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="h-8 w-8"
//                 onClick={addLanguage}
//               >
//                 <Plus size={16} />
//               </Button>
//             </div>
//           </div>
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   );
// }

// function SalaryRow({
//   salary,
//   min,
//   max,
//   updateSalary,
// }: {
//   salary: string;
//   min?: string;
//   max?: string;
//   updateSalary: (salary: string, min?: string, max?: string) => void;
// }) {
//   return (
//     <div className="grid grid-cols-[70px_auto] gap-x-3 px-5 items-center">
//       <p className="text-sm font-semibold text-foreground">Salary</p>
//       <HoverCard>
//         <HoverCardTrigger className="min-w-0">
//           <p className="text-sm text-primary truncate">{salary}</p>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-80">
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <Input
//                 value={salary}
//                 onChange={(e) => updateSalary(e.target.value, min, max)}
//                 placeholder="Salary"
//                 className="w-full h-8"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Input
//                 value={min || ""}
//                 onChange={(e) => updateSalary(salary, e.target.value, max)}
//                 placeholder="Min"
//                 className="w-24 h-8"
//               />
//               <span>-</span>
//               <Input
//                 value={max || ""}
//                 onChange={(e) => updateSalary(salary, min, e.target.value)}
//                 placeholder="Max"
//                 className="w-24 h-8"
//               />
//             </div>
//           </div>
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   );
// }

// type Stage = {
//   name: string;
//   date: Date | null;
// };

// type CandidateProcessProps = {
//   stages: Stage[];
//   processingDates: Date[];
//   updateStages: (stages: Stage[]) => void;
//   addProcessingDate: (date: Date) => void;
// };

// export function CandidateProcess({
//   stages,
//   processingDates,
//   updateStages,
//   addProcessingDate,
// }: CandidateProcessProps) {
//   const [date, setDate] = useState<Date>();

//   const updateStageDate = (index: number, newDate: Date) => {
//     const updatedStages = [...stages];
//     updatedStages[index].date = newDate;
//     updateStages(updatedStages);
//     toast({
//       description: `Date updated for ${updatedStages[index].name}`,
//     });
//   };

//   const handleAddProcessingDate = (selectedDate: Date | undefined) => {
//     if (selectedDate) {
//       addProcessingDate(selectedDate);
//       setDate(undefined);
//     }
//   };

//   return (
//     <div className="flex flex-col items-start space-y-2 px-5">
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button variant="outline" size="sm">
//             Add Processing Date
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0" align="start">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={(selectedDate) => {
//               setDate(selectedDate);
//               handleAddProcessingDate(selectedDate);
//             }}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>

//       <HoverCard>
//         <HoverCardTrigger>
//           <Badge>
//             {processingDates && processingDates.length > 0
//               ? `Last Process: ${format(
//                   processingDates[processingDates.length - 1],
//                   "PP"
//                 )}`
//               : "Not processed"}
//           </Badge>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-80">
//           {processingDates && processingDates.length > 0 ? (
//             processingDates.map((date, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center mb-2"
//               >
//                 <span>
//                   Process {index + 1}: {format(date, "PP")}
//                 </span>
//                 <div className="space-x-2">
//                   <Button
//                     size="sm"
//                     onClick={() => addProcessingDate(new Date())}
//                   >
//                     Update
//                   </Button>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button variant="outline" size="sm">
//                         <CalendarIcon className="h-4 w-4" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="end">
//                       <Calendar
//                         mode="single"
//                         selected={date}
//                         onSelect={(selectedDate) =>
//                           selectedDate && addProcessingDate(selectedDate)
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No processing dates available.</p>
//           )}
//         </HoverCardContent>
//       </HoverCard>

//       <HoverCard>
//         <HoverCardTrigger>
//           <Badge>
//             {stages && stages.length > 0 ? (
//               <>
//                 {stages[stages.length - 1].name}:{" "}
//                 {stages[stages.length - 1].date
//                   ? format(stages[stages.length - 1].date, "PP")
//                   : "Not set"}
//               </>
//             ) : (
//               "No stages available"
//             )}
//           </Badge>
//         </HoverCardTrigger>

//         <HoverCardContent className="w-80">
//           {stages?.map((stage, index) => (
//             <div
//               key={stage.name}
//               className="flex justify-between items-center mb-2"
//             >
//               <span>
//                 <strong>{stage.name}:</strong>{" "}
//                 {stage.date ? format(stage.date, "PP") : "Not set"}
//               </span>
//               <div className="space-x-2">
//                 <Button
//                   size="sm"
//                   onClick={() => updateStageDate(index, new Date())}
//                 >
//                   {stage.date ? "Update" : "Set Date"}
//                 </Button>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button variant="outline" size="sm">
//                       <CalendarIcon className="h-4 w-4" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="end">
//                     <Calendar
//                       mode="single"
//                       selected={stage.date || undefined}
//                       onSelect={(selectedDate) =>
//                         selectedDate && updateStageDate(index, selectedDate)
//                       }
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//           ))}
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   );
// }

// function FavoritePositions({
//   positions,
//   updatePositions,
// }: {
//   positions: string[];
//   updatePositions: (positions: string[]) => void;
// }) {
//   const [newPosition, setNewPosition] = useState("");

//   const addPosition = () => {
//     if (newPosition) {
//       updatePositions([...positions, newPosition]);
//       setNewPosition("");
//     }
//   };

//   const removePosition = (index: number) => {
//     updatePositions(positions.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="px-5 mt-4">
//       <p className="text-sm font-semibold text-foreground mb-2">
//         Favorite Positions (Optional)
//       </p>
//       <div className="space-y-2">
//         {positions.map((position, index) => (
//           <Badge key={index} variant="secondary" className="mr-2">
//             {position}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="h-4 w-4 ml-1 p-0"
//               onClick={() => removePosition(index)}
//             >
//               <Trash2 size={10} />
//             </Button>
//           </Badge>
//         ))}
//         <div className="flex items-center space-x-2">
//           <Input
//             value={newPosition}
//             onChange={(e) => setNewPosition(e.target.value)}
//             placeholder="Add new position"
//             className="h-8"
//           />
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-8 w-8"
//             onClick={addPosition}
//           >
//             <Plus size={16} />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
