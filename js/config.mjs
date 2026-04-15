import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [ {
        "name" : "Peter Haasnoot",
        "company" : "Logius",
        "url" : "https://www.logius.nl"
      } ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Peter Haasnoot",
        "url" : "https://www.logius.nl"
      },
      { 
        "company" : "Logius",
        "name" : "Pieter Hering",
        "url" : "https://www.logius.nl"
      }
    ],
  github: "https://github.com/Logius-standaarden/Digikoppeling-Wat-is-Digikoppeling",
  previousMaturity: "DEF",
  pubDomain: "dk",
  publishDate: "2022-04-11",
  publishVersion: "1.1.2",
  previousPublishVersion: "1.1.1",
  shortName: "watisdk",
  specStatus: "WV",
  specType: "HR"
});
