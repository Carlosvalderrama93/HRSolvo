import { format } from "date-fns"; // Optional, only if using date-fns

import {
  ArrowUpCircle,
  Check,
  CheckCircle2,
  ChevronsUpDown,
  Circle,
  Copy,
  Edit,
  HelpCircle,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

import { toast } from "@/hooks/use-toast";

export function Name() {
  const candidateStatus = [
    {
      value: "Not Contacted",
      label: "Not Contacted",
    },
    {
      value: "In process",
      label: "In process",
    },
    {
      value: "1 unresponsive - Wsent",
      label: "1 unresponsive - Wsent",
    },
    {
      value: "Contacted, ETC Sent",
      label: "Remix",
    },
    {
      value: "TA Interview",
      label: "Astro",
    },
    {
      value: "Hired",
      label: "Hired",
    },
    {
      value: "Discarted",
      label: "Discarted",
    },
  ];

  const englishLevel = [
    {
      value: "10",
      label: "10",
    },
    {
      value: "9",
      label: "9",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "7",
      label: "7",
    },
    {
      value: "1, 2, 3, 4, 5, 6",
      label: "0 to 6",
    },
  ];
  return (
    <div className="bg-zinc-50 box-border gap-y-2 flex flex-col min-w-56 max-w-lg py-5">
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Name</p>

        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">
              Carlos Alberto Valderrama Barbosa
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground flex">
            Carlos Alberto Valderrama Barbosa
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
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Email</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">
              CarlosAlbertoValderramaBarbosa@gmail.com
            </p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            CarlosAlbertoValderramaBarbosa@gmail.com
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
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Cell</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">57 318 601 8140</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            57 318 601 8140
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
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Location</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">Bogotá, Colombia</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            Bogotá, Colombia
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
      <Separator className="my-1 w-4/5 self-center" />
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Salary</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">5.000.000</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            5.000.000
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
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">ID</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">1110246945</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            1110246945
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
      <div className="items-center grid grid-cols-[70px_auto_20px] gap-x-3 px-5">
        <p className="text-sm font-semibold text-foreground">Position</p>
        <HoverCard>
          <HoverCardTrigger className="min-w-0">
            <p className="text-sm text-primary truncate">Legal Asisstant</p>
          </HoverCardTrigger>
          <HoverCardContent className="text-sm text-foreground w-auto">
            1110246945
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

      <Tabs defaultValue="studies" className="box-border px-3">
        <TabsList className="grid w-full grid-cols-2 border-b">
          <TabsTrigger value="studies" className="font-semibold">
            Studies
          </TabsTrigger>
          <TabsTrigger value="experience" className="font-semibold">
            Experience
          </TabsTrigger>
        </TabsList>

        <TabsContent value="studies" className="">
          <div className="space-y-3">
            <div className="text-sm text-primary p-4 border rounded overflow-y-auto">
              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5 box-border"
                  onClick={() => {}}
                >
                  <Copy size={10} />
                </Button>
              </div>
              Impedit velit labore soluta ipsum non doloribus dolores mollitia,
              odit pariatur voluptate quam unde at vero a, laboriosam iusto
              assumenda? Sint, laudantium.
            </div>
          </div>
        </TabsContent>

        <TabsContent value="experience">
          <div className="space-y-3">
            <div className="text-sm text-primary p-4 border rounded overflow-y-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              velit labore soluta ipsum non doloribus dolores mollitia, odit
              pariatur voluptate quam unde at vero a, laboriosam iusto
              assumenda? Sint, laudantium.
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 box-border"
                onClick={() => {}}
              >
                <Copy size={10} />
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="items-center grid grid-cols-[70px_auto] gap-x-3 px-5">
        <p className="font-semibold">Status</p>
        <CandidateStatusCombobox data={candidateStatus} />
        <p className="font-semibold">English</p>
        <CandidateStatusCombobox data={englishLevel} />
      </div>

      <div>
        <ComboboxPopover />
      </div>
    </div>
  );
}

export function CandidateStatusCombobox({
  data,
}: {
  data: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {value
            ? data.find((status) => status.value === value)?.label
            : "Select status..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search status..." />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {data.map((status) => (
                <CommandItem
                  key={status.value}
                  value={status.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === status.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {status.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const statuses: Status[] = [
  { value: "backlog", label: "Backlog", icon: HelpCircle },
  { value: "todo", label: "Todo", icon: Circle },
  { value: "in progress", label: "In Progress", icon: ArrowUpCircle },
  { value: "done", label: "Done", icon: CheckCircle2 },
  { value: "canceled", label: "Canceled", icon: XCircle },
];

export function ComboboxPopover() {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [clickDate, setClickDate] = useState<string | null>(null);

  const handleStatusSelect = (value: string) => {
    const selected = statuses.find((status) => status.value === value) || null;
    setSelectedStatus(selected);
    setClickDate(new Date().toLocaleString()); // Record the current date and time
    setOpen(false);
  };

  return <CandidateProcess />;
}

// type Stage = "Creation" | "Contacted" | "Processed";

type Stage = {
  name: string;
  date?: Date;
};
const initialStages: Stage[] = [
  { name: "Creation" },
  { name: "Contacted" },
  { name: "Processed" },
];

function CandidateProcess() {
  const [stages, setStages] = useState<Stage[]>(initialStages);

  // Find the first stage without a date (this will be the stage for the button)
  const currentStageIndex = stages.findIndex((stage) => !stage.date);
  const currentStage = stages[currentStageIndex];

  // Find the most recent stage that has a date (this will be shown in the badge)
  const lastCompletedStage = stages
    .filter((stage) => stage.date)
    .reduce(
      (latest, stage) =>
        stage.date && (!latest.date || stage.date > latest.date)
          ? stage
          : latest,
      stages[0]
    );

  // Handle button click to update date
  const updateDate = () => {
    if (currentStageIndex !== -1) {
      const updatedStages = [...stages];
      const now = new Date(); // Get the current date and time
      updatedStages[currentStageIndex].date = now; // Set the current date
      setStages(updatedStages);
      toast({
        description: `Date updated for ${updatedStages[currentStageIndex].name}`,
      });
    }
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Button for the current stage that can be updated */}
      {currentStageIndex !== -1 && (
        <Button onClick={updateDate}>Add {currentStage.name} Date</Button>
      )}

      {/* Badge and HoverCard for the last completed stage */}
      {lastCompletedStage.date && (
        <HoverCard>
          <HoverCardTrigger>
            <Badge>
              {lastCompletedStage.name}:{" "}
              {lastCompletedStage.date.toLocaleDateString()}
            </Badge>
          </HoverCardTrigger>
          <HoverCardContent>
            {stages
              .filter((stage) => stage.date)
              .map((stage) => (
                <div key={stage.name} className="flex justify-between text-sm">
                  <strong>{stage.name}:</strong>{" "}
                  {stage.date?.toLocaleDateString()}
                  <Button className="xs" onClick={() => updateDate()}>
                    Update
                  </Button>
                </div>
              ))}
          </HoverCardContent>
        </HoverCard>
      )}
    </div>
  );
}

type Experience = {
  time: string; // e.g., "2020-2024"
  positions: string;
  company: string;
  abilitiesOrTechnologies: string[];
  functions: string[];
};

type Salary = {
  money: "COP" | "USD" | "EUR" | "GBP" | "JPY" | "Other"; // Currency or unit of the salary amount
  quantity: {
    min: number; // Minimum salary amount
    max: number; // Maximum salary amount
  };
};

type Address = {
  country: string;
  city: string;
  otherCities?: string[]; // Optional list of other cities the candidate can work in
};

type Languages = {
  language: "English" | "Spanish" | "French" | "Portuguese" | "Other"; // Extend with other languages as needed
  level: "10" | "9" | "8" | "7" | "0 to 6"; // Adjust levels as needed
};

type CandidateStatus =
  | { status: "inProcess"; subStatus: InProcessSubStatus }
  | { status: "rejected"; subStatus: RejectedSubStatus };

type InProcessSubStatus =
  | "Not Contacted"
  | "In process"
  | "1 unresponsive - Wsent"
  | "Contacted, ETC Sent"
  | "TA Interview"
  | "Hired";

type RejectedSubStatus = "Discarded" | "OtherRejectionReason"; // Add additional options as needed

type ProcessDates = {
  dateAdded?: Date; // Optional field
  dateContacted?: Date; // Optional field
  dateProcessed?: Date; // Optional field
};

type Candidate = {
  name: {
    firstName: string; // e.g., "John"
    lastName: string; // e.g., "Doe"
  };
  emails: string[];
  whatsapp: string[];
  experience: Experience[];
  salary: Salary;
  address: Address;
  candidateStatus: CandidateStatus;
  languages: Languages[];
  statusCandidate: CandidateStatus; // Adjust this to your specific requirements if needed
  processDate?: ProcessDates; // Optional date when the process was recorded
  idNumber: string;
  id: string;
  aditionalInfo: string;
  TAIDate: string;
  POC: string;
  PositionSent: string;
};
