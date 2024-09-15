import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

const initialCountryCodes = [
  { value: "US", label: "United States", code: "+1" },
  { value: "GB", label: "United Kingdom", code: "+44" },
  { value: "CA", label: "Canada", code: "+1" },
  { value: "AU", label: "Australia", code: "+61" },
  { value: "DE", label: "Germany", code: "+49" },
  // Add more country codes as needed
];

export default function CountryCodeCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [countryCodes, setCountryCodes] = useState(initialCountryCodes);
  const [newCountry, setNewCountry] = useState({
    value: "",
    label: "",
    code: "",
  });

  const selectedCountry = countryCodes.find(
    (country) => country.code === value
  );

  const handleAddCountry = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCountry.value && newCountry.label && newCountry.code) {
      setCountryCodes((prevCodes) => [...prevCodes, newCountry]);
      setNewCountry({ value: "", label: "", code: "" });
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[110px] justify-between"
        >
          {selectedCountry ? selectedCountry.code : "Code"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country code..." />
          <CommandList>
            <CommandEmpty>No country code found.</CommandEmpty>
            <CommandGroup heading="Countries">
              {countryCodes.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={() => {
                    setValue(country.code === value ? "" : country.code);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.label} ({country.code})
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <form onSubmit={handleAddCountry} className="flex flex-col">
                  <div className="grid gap-x-1 grid-cols-[20%_20%_auto] w-full">
                    <Input
                      placeholder="CO"
                      value={newCountry.value}
                      onChange={(e) =>
                        setNewCountry((prev) => ({
                          ...prev,
                          value: e.target.value,
                        }))
                      }
                    />
                    <Input
                      placeholder="57"
                      value={newCountry.code}
                      onChange={(e) =>
                        setNewCountry((prev) => ({
                          ...prev,
                          code: e.target.value,
                        }))
                      }
                    />
                    <Input
                      placeholder="Colombia"
                      value={newCountry.label}
                      onChange={(e) =>
                        setNewCountry((prev) => ({
                          ...prev,
                          label: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <Button type="submit" className="w-full my-1 font-semibold">
                    Add Country
                  </Button>
                </form>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
