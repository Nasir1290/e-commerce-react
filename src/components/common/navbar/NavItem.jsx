import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function NavItem() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 font-semibold">
      <Tabs
        color="primary"
        variant={"underlined"}
        aria-label="Tabs variants"
        onSelectionChange={(key) => {
          if (key === "home") navigate("/");
          if (key === "shop") navigate("/shop");
          if (key === "trending") navigate("/trending");
          if (key === "our mission") navigate("/mission");
        }}
      >
        <Tab key="home" title="Home" />
        <Tab key="shop" title="Shop" />
        <Tab key="trending" title="Trending" />
        <Tab key="our mission" title="Our Mission" />
      </Tabs>
    </div>
  );
}
