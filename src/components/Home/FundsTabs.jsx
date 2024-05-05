import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FundCards from "./FundCards";
import SectionTitle from "./SectionTitle";
import "./FundsTabs.css";
import FHospitals from "./FundTabsHospitals";
import FDoctors from "./FundTabsdoctors";
import FEvents from "./Fundevents";

export default function FundsTabs() {
  return (
    <Tabs className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8">
        <SectionTitle title="All" />
        <TabList className="flex overflow-auto">
          <Tab id="fth" className="fth px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Articles
         </Tab>
          <Tab className="fth px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
            Doctors
          </Tab>
          <Tab className="fth px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
          Hospitals</Tab>
          <Tab className="fth px-4 py-3 cursor-pointer font-bold sm:text-[16px] text-[14px]">
          Events</Tab>
        </TabList>
      </div>
      <TabPanel>
        <FundCards />
      </TabPanel>
      <TabPanel>
        <FDoctors></FDoctors>
      </TabPanel>
      <TabPanel>
      <FHospitals/>
      </TabPanel>
      <TabPanel>
        <FEvents></FEvents>
      </TabPanel>
      {/* <TabPanel>
        <FundCards />
      </TabPanel> */}
    </Tabs>
  );
}
