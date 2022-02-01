import React from "react";
import "../../ui/styles/main.css";
import f7params from "./f7params";
import { App, Page, Navbar, Block, Link } from 'konsta/react';
export default function MyApp() {
  return (
    <App theme="ios">
    <Page>
      <Navbar
        title="Navbar"
        subtitle="Subtitle"
        className="top-0 sticky"
        right={<Link navbar>Right</Link>}
      />
      <div className="relative">
        <Block strong>
          <p>
            Navbar is a fixed area at the top of a screen that contains Page
            title and navigation elements.
          </p>
        </Block>
      </div>
    </Page>
  </App>
  );
}
