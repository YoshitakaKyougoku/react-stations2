import Header from "@components/header/header";
import ThreadList from "@components/threadList/threadList";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <ThreadList />
    </>
  );
}
