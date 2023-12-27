import React from "react";
import Arrow from "../images/down.png";
import Demo from "../images/demo.png";
import Log from "../images/demo2.png";
import Alpha from "../images/alpha.png";
import Jobs from "../images/jobs.png";
import Failed from "../images/failed.png";
import Progress from "../images/progess.png";
import Completed from "../images/completed.png";
import Sort from "../images/Sort.png";
import { BarChart, Bar, XAxis, Label, Tooltip, Legend } from "recharts";

const Content = () => {
  const data = [
    { name: "Apr", value: 188, targetValue: 170 },
    { name: "May", value: 220, targetValue: 195 },
    { name: "Jun", value: 220, targetValue: 196 },
    { name: "July", value: 220, targetValue: 195 },
    { name: "Aug", value: 220, targetValue: 195 },
  ];
  return (
    <>
      <div className="w-[345] ml-14 flex flex-col items-start">
        <span className="text-sm font-black">Jobs Overview</span>

        <div className="rounded-xl bg-white box-border w-28 h-8 flex flex-row items-center justify-end text-3xs border-[1px] border-solid border-grey-20 ml-at mt-tp">
          <div className="relative">30 Days</div>
          <img
            className="relative w-5 h-1 object-contain ml-1"
            alt="arrow"
            src={Arrow}
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="rounded-3xl flex items-center justify-center py-2 px-4 gap-[4px] border-[1px] border-solid border-grey-20">
            <img
              className="relative rounded-[50%] w-4 h-4"
              alt="west icon"
              src={Demo}
            />
            <div className="relative text-black">West</div>
          </div>

          <div className="rounded-3xl flex items-center bg-black text-white justify-center py-2 px-4 gap-[4px] border-[1px] border-solid border-grey-20">
            <img
              className="relative rounded-[50%] w-4 h-4 object-cover"
              alt="log icon"
              src={Log}
            />
            <div className="relative">Log</div>
          </div>

          <div className="rounded-3xl shrink-0 flex flex-row items-center justify-center py-2 px-4 gap-[4px] border-[1px] border-solid border-grey-20">
            <img
              className="relative rounded-[50%] w-8 h-7 "
              alt="alpha icon"
              src={Alpha}
            />
            <div className="relative">FS</div>
          </div>
        </div>

        <div className="flex items-start justify-start gap-[8px]">
          <div className="bg-black border rounded-2xl w-52 h-64 mt-2">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative rounded-xl w-8 h-8 overflow-hidden shrink-0 bg-white mt-6 ml-5"
                alt="icon"
                src={Jobs}
              />
              <span className="relative text-white mt-5">Received Jobs</span>
            </div>

            <div className="flex flex-col items-start justify-center">
              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <div className="ml-16 font-black text-white text-lr">300</div>
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="text-white ml-4">Parking</li>
                  </ul>
                </div>
                <span className="mt-14 text-xs text-white mr-6 ">250</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="text-white ml-4">Flagging</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs text-white mr-6">250</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="text-white ml-4">Regular</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs text-white mr-6">50</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0  text-ls pl-4 list-disc">
                    <li className="text-white ml-4">Asap</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs text-white mr-6">50</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-[8px] mt-4">
            <div className="rounded-2xl bg-white flex flex-col items-start justify-center p-8 gap-[12px] border-[1px] border-solid border-grey-10">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative rounded-xl w-6 h-6  shrink-0 object-cover"
                  alt="progress icon"
                  src={Progress}
                />
                <div className="relative leading-[16px] font-medium">
                  In Progress
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-0 px-1 text-base">
                <b className="ml-12">250</b>
              </div>
            </div>

            <div className="rounded-2xl bg-white flex flex-col items-start justify-center py-6 px-4 gap-[12px] border-[1px] border-solid border-grey-10">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative rounded-xl w-6 h-6 "
                  alt="failed icon"
                  src={Failed}
                />
                <div className="relative leading-[16px] font-medium">
                  Failed Jobs
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-0 px-1 text-base">
                <b className="ml-12">3</b>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl w-52 h-64 mt-2 ml-4">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative rounded-xl w-8 h-8 overflow-hidden shrink-0 bg-white mt-6 ml-5"
                alt="icon"
                src={Completed}
              />
              <span className="relative text-black mt-5">Completed Jobs</span>
            </div>

            <div className="flex flex-col items-start justify-center">
              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <div className="ml-20 text-black text-lr">50</div>
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="font-black ml-4">Parking</li>
                  </ul>
                </div>
                <span className="mt-14 text-xs font-black mr-6 ">250</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="font-black ml-4">Flagging</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs font-black mr-6">250</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0 text-ls pl-4 list-disc">
                    <li className="font-black ml-4">Regular</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs font-black mr-6">50</span>
              </div>

              <div className="flex-1 flex items-center justify-between w-full ">
                <div className="relative">
                  <ul className="m-0  text-ls pl-4 list-disc">
                    <li className="font-black ml-4">Asap</li>
                  </ul>
                </div>
                <span className="mt-1 text-xs font-black mr-6">50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white mt-2 ml-8 shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] w-[526px] flex flex-col items-center justify-start p-4 box-border gap-[12px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
            <div className="relative font-black">Monthly `Overview</div>
            <div className="relative text-xs font-medium text-black-80">
              Last 6 month
            </div>
          </div>
          <div className="w-[226px] shrink-0 flex flex-row items-center justify-end gap-[8px] text-3xs text-grey-60 mb-5">
            <div className="shrink-0 flex flex-row items-start justify-start gap-[4px]">
              <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2 gap-[4px]">
                <div className="relative rounded-[50%] bg-grey-20 w-1 h-1" />
                <div className="relative">Income</div>
              </div>
              <div className=" flex flex-row items-center justify-start py-0 px-2 gap-[4px]">
                <div className="relative rounded-[50%] bg-nightblue-80 w-1 h-1" />
                <div className="relative">Completed</div>
              </div>
            </div>
            <img
              className=" rounded-xl w-swid   bg-white mt-3 ml-5"
              alt="icon"
              src={Sort}
            />
          </div>
        </div>

        <BarChart
          width={462}
          height={254}
          data={data}
          style={{ barWidth: 2, borderRadius: 15 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#EFF0F1" radius={[50, 50, 50, 50]}>
            <Label
              position="top"
              value={({ value, targetValue }) => `${value} / ${targetValue}`}
            />
          </Bar>
          <Bar dataKey="targetValue" fill="#627BE8" radius={[50, 50, 50, 50]}>
            <Label
              position="top"
              value={({ value, targetValue }) => `${value} / ${targetValue}`}
            />
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default Content;
