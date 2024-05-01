import NewThread from "@components/newThread/newThread";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/thread/new")({
  component: About,
});

function About() {
  return (
    <NewThread />
  );
}
