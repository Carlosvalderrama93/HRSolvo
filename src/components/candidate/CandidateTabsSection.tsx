import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function CandidateTabsSection() {
  return (
    <Tabs defaultValue="studies" className="box-border px-3">
      <TabsList className="grid w-full grid-cols-2 border-b">
        <TabsTrigger value="studies" className="font-semibold">
          Studies
        </TabsTrigger>
        <TabsTrigger value="experience" className="font-semibold">
          Experience
        </TabsTrigger>
      </TabsList>
      <TabsContent value="studies">
        <TabContent text="Impedit velit labore soluta ipsum non doloribus dolores mollitia, odit pariatur voluptate quam unde at vero a, laboriosam iusto assumenda? Sint, laudantium." />
      </TabsContent>
      <TabsContent value="experience">
        <TabContent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit velit labore soluta ipsum non doloribus dolores mollitia, odit pariatur voluptate quam unde at vero a, laboriosam iusto assumenda? Sint, laudantium." />
      </TabsContent>
    </Tabs>
  );
}

function TabContent({ text }: { text: string }) {
  return (
    <div className="space-y-3">
      <div className="text-sm text-primary p-4 border rounded overflow-y-auto relative">
        {text}
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5 box-border absolute top-2 right-2"
          onClick={() => {}}
        >
          <Copy size={10} />
        </Button>
      </div>
    </div>
  );
}
