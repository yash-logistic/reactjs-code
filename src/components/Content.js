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
import Employee from "../images/employee.png";
import Star from "../images/star.png";
import Trophy from "../images/Trophy.png";

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
      <div className="flex">
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
            <div className="bg-black border rounded-2xl w-80 h-64 mt-2">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="ml-20 rounded-xl w-8 h-8 overflow-hidden shrink-0 bg-white mt-6"
                  alt="icon"
                  src={Jobs}
                />
                <span className="relative text-white mt-5 ">Received Jobs</span>
              </div>

              <div className="flex flex-col items-start justify-center">
                <div className="flex-1 flex items-center justify-between w-full ">
                  <div className="relative">
                    <div className="ml-28 font-black text-white text-center text-lr">
                      300
                    </div>
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
                  <span className="ml-12">250</span>
                </div>
              </div>

              <div className="rounded-2xl bg-white flex flex-col items-start justify-center p-8  gap-[12px] border-[1px] border-solid border-grey-10">
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
                  <span className="ml-12">3</span>
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

          <div className="rounded-2xl bg-white mt-2 ml-8 shadow-[0px_4px_16px_rgba(0,_0,_0,_0.04)] w-[526px] flex flex-col items-center justify-start p-4 box-border gap-[12px]">
            <div className=" flex flex-row items-center justify-between">
              <div className="shrink-0 flex flex-row items-center justify-start gap-[4px]">
                <div className="ml-tp  font-black">Monthly `Overview</div>
                <div className="relative mt-1 text-xs font-medium text-black-80">
                  Last 6 month
                </div>
              </div>
              <div className="w-[226px] shrink-0 flex flex-row items-center justify-end gap-[8px] ml-16 text-3xs text-grey-60 mb-5">
                <div className="shrink-0 flex flex-row items-start justify-start gap-[4px]">
                  <div className="shrink-0 flex flex-row items-center justify-start py-0 px-2 gap-[4px]">
                    <div className="relative rounded-[50%] bg-grey-20 w-1 mt-5 h-1" />
                    <div className="relative mt-5  text-ls font-normal ">
                      Income
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-start py-0 px-2 gap-[4px]">
                    <div className="relative rounded-[50%] bg-nightblue-80 w-1 mt-5 h-1" />
                    <div className="relative mt-5 text-ls font-normal">
                      Completed
                    </div>
                  </div>
                </div>
                <img
                  className=" rounded-xl w-swid   bg-white mt-4 ml-5"
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
                  value={({ value, targetValue }) =>
                    `${value} / ${targetValue}`
                  }
                />
              </Bar>
              <Bar
                dataKey="targetValue"
                fill="#627BE8"
                radius={[50, 50, 50, 50]}
              >
                <Label
                  position="top"
                  value={({ value, targetValue }) =>
                    `${value} / ${targetValue}`
                  }
                />
              </Bar>
            </BarChart>
          </div>
        </div>

        <div className="ml-28">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] ">
              <div className="self-stretch flex flex-row items-start justify-between ">
                <div className="w-[408.5px]  flex flex-col items-start justify-start  gap-[12px]">
                  <div className="relative font-black ">People `Overview</div>
                  <div className="flex flex-row items-start justify-start gap-[4px] text-xs ">
                    <div className="rounded-3xl shrink-0 flex flex-row items-center  justify-center py-2 px-4 gap-[4px] border-[1px] border-solid border-grey-20">
                      <img
                        className="relative rounded-[50%] w-4 h-4 object-cover"
                        alt="west icon"
                        src={Demo}
                      />
                      <div className="relative">West</div>
                    </div>
                    <div className="rounded-3xl bg-black-100 shadow-[0px_4px_6px_rgba(0,_0,_0,_0.08)] shrink-0 flex flex-row items-center justify-center py-2 px-4 gap-[4px] text-white border-[1px] border-solid border-black-100">
                      <img
                        className="relative rounded-[50%] w-4 h-4 object-cover"
                        alt="log icon"
                        src={Log}
                      />
                      <div className="text-black">Log</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white box-border h-8 flex flex-row items-center justify-start py-3 px-4 gap-[8px] text-3xs border-[1px] border-solid border-grey-20">
                  <div className="relative">Last Week</div>
                  <img
                    className="relative w-2 h-1 object-contain"
                    alt="arrow icon"
                    src={Arrow}
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] text-black-80">
                <div className="shrink-0 flex  flex-col items-start  justify-start pt-3 px-4 pb-4 gap-[16px]">
                  <div className="self-stretch shrink-0 flex flex-row items-start justify-between py-0 pr-0 pl-2">
                    <div className="shrink-0 flex flex-row items-center justify-start">
                      <div className="relative leading-[16px] font-medium">
                        Employee of the Week
                      </div>
                    </div>
                    <div className="relative text-3xs text-grey-80">
                      11-18 nov, 2023
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-xs">
                    <div className="bg-white shrink-0 flex flex-row items-start justify-start">
                      <div className="rounded-lg border border-gray-300 bg-cbg shrink-0 flex flex-col items-start justify-center p-4">
                        <div className="self-stretch  flex flex-col items-start justify-center gap-[8px]">
                          <div className=" w-[124px]   flex flex-col items-start justify-start relative gap-[8px]">
                            <img
                              className="relative rounded-13xl w-[65px] h-[65px] object-cover z-[0]"
                              alt="employee icon"
                              src={Employee}
                            />
                            <div className="self-stretch relative font-medium z-[1]">
                              Tornike Berdzenishvili
                            </div>
                            <img
                              className="absolute my-0 mx-[!important] top-[48px] left-[50px] rounded-3xl w-4 h-4 overflow-hidden shrink-0 object-cover z-[2]"
                              alt="trophy icon"
                              src={Trophy}
                            />
                            <div className="w-[120px] flex flex-row items-center justify-start gap-[4px] z-[3] text-grey-100">
                              <img
                                className="relative w-3 h-3 overflow-hidden shrink-0 object-cover"
                                alt="star icon"
                                src={Star}
                              />
                              <div className="relative font-medium">4.6</div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[8px] text-5xs">
                            <div  className="rounded-3xl cgy shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                              <span className="relative">West</span>
                            </div>
                            <div className="rounded-3xl cgy  shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                              <span className="relative">Parking</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg border border-gray-300 bg-background flex flex-col items-center justify-center pt-2 px-1 pb-0 gap-[12px]">
                      <div className="self-stretch flex flex-col items-center justify-start py-0 px-1 gap-[8px]">
                        <div className="w-32 flex flex-row items-start justify-between py-0 pr-0 pl-1 box-border">
                          <div className="relative font-medium text-xs">Total Jobs</div>
                          <div className="relative text-sm  font-medium text-grey-100">
                            50
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center gap-[4px] text-3xs">
                          <div className="self-stretch flex flex-row items-center justify-between">
                            <div className="flex-1 shrink-0 flex flex-row items-center justify-start">
                              <div className="relative">
                                <ul className="m-0 font-normal text-ls pl-[13px]">
                                  <li>Parking</li>
                                </ul>
                              </div>
                            </div>
                            <div className="relative text-black-100">250</div>
                          </div>
                          <div className="self-stretch flex flex-row items-center justify-start">
                            <div className="flex-1 shrink-0 flex flex-row items-center justify-start">
                              <div className="relative">
                                <ul className="m-0 font-normal text-ls pl-[13px]">
                                  <li>Flagging</li>
                                </ul>
                              </div>
                            </div>
                            <div className="relative text-black-100">250</div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-[9px] bg-background flex flex-col items-center justify-start py-2 px-0 gap-[8px] text-grey-80">
                        <span className="relative">Total Hours</span>
                        <div className="relative text-13xl font-black text-black-80">
                          150
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white shrink-0 flex flex-col items-start justify-start pt-3 px-4 pb-4 gap-[16px] text-xs">
                  <div className="self-stretch shrink-0 flex flex-row items-start justify-between py-0 px-2 text-sm">
                    <div className="shrink-0 flex flex-row items-center justify-start">
                      <div className="relative leading-[16px] font-medium">
                        Top Requestor
                      </div>
                    </div>
                    <div className="relative text-3xs text-grey-80">
                      11-18 nov, 2023
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white shrink-0 flex flex-row items-start justify-center p-4 gap-[16px] border-[1px] border-solid border-grey-10">
                    <div className="shrink-0 flex flex-col items-start justify-center gap-[8px]">
                      <div className="rounded-3xl box-border w-[124px] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                        <div className="self-stretch relative font-medium">
                          James Brown
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                        <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                          <span className="relative">West</span>
                        </div>
                        <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                          <span className="relative">Flagging</span>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-col items-center justify-between text-grey-100">
                      <div className="relative font-medium text-xs">Jobs Received</div>
                      <span className="relative text-2xl font-bold text-black-80">50</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white shrink-0 flex flex-row items-start justify-center p-4 gap-[16px] border-[1px] border-solid border-grey-10">
                    <div className="shrink-0 flex flex-col items-start justify-center gap-[8px]">
                      <div className="rounded-3xl box-border w-[124px] flex flex-col items-start justify-start border-[1px] border-solid border-white">
                        <div className="self-stretch relative font-medium">
                          Roberto Rodriguez
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                        <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                          <span className="relative">West</span>
                        </div>
                        <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                          <span className="relative">Flagging</span>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shrink-0 flex flex-col items-center justify-between text-grey-100">
                      <div className="relative font-medium text-xs">Jobs Received</div>
                      <span className="relative text-2xl font-bold text-black-80">32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-2 text-xs text-black-80">
              <div className="flex flex-row items-start justify-start py-4 px-6 text-sm">
                <div className="relative leading-[16px] font-medium">
                  Good Performers
                </div>
              </div>
              <div className="self-stretch [filter:drop-shadow(0px_4px_8px_rgba(141,_141,_141,_0.05))] flex flex-row items-center justify-between py-2 px-6">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative rounded-3xl w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt="trophy icon"
                      src={Trophy}
                    />
                    <div className="relative font-medium">
                      Tornike Berdzenishvili
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">West</span>
                    </div>
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">Parking</span>
                    </div>
                  </div>
                </div>
                <div className="w-[301px] shrink-0 flex flex-row items-center justify-end gap-[23px] text-grey-100">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">66 job</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">356 hrs.</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-6">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-10" />
              </div>
              <div className="self-stretch [filter:drop-shadow(0px_4px_8px_rgba(141,_141,_141,_0.05))] flex flex-row items-center justify-between py-2 px-6">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="relative rounded-3xl w-4 h-4 overflow-hidden shrink-0 object-cover"
                      alt="trophy icon"
                      src={Trophy}
                    />
                    <div className="relative font-medium">Beka Ivanishvili</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">West</span>
                    </div>
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">Parking</span>
                    </div>
                  </div>
                </div>
                <div className="w-[301px] shrink-0 flex flex-row items-center justify-end gap-[23px] text-grey-100">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">66 job</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">356 hrs.</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-6">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-10" />
              </div>
              <div className="self-stretch [filter:drop-shadow(0px_4px_8px_rgba(141,_141,_141,_0.05))] flex flex-row items-center justify-between py-2 px-6">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="relative font-medium">Beka Ivanishvili</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">West</span>
                    </div>
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">Parking</span>
                    </div>
                  </div>
                </div>
                <div className="w-[301px] shrink-0 flex flex-row items-center justify-end gap-[23px] text-grey-100">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">66 job</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">356 hrs.</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-6">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-10" />
              </div>
              <div className="self-stretch [filter:drop-shadow(0px_4px_8px_rgba(141,_141,_141,_0.05))] flex flex-row items-center justify-between py-2 px-6">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="relative font-medium">Beka Ivanishvili</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">West</span>
                    </div>
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">Parking</span>
                    </div>
                  </div>
                </div>
                <div className="w-[301px] shrink-0 flex flex-row items-center justify-end gap-[23px] text-grey-100">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">66 job</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">356 hrs.</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-1 px-6">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-10" />
              </div>
              <div className="self-stretch [filter:drop-shadow(0px_4px_8px_rgba(141,_141,_141,_0.05))] flex flex-row items-center justify-between py-2 px-6">
                <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="relative font-medium">Beka Ivanishvili</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-5xs">
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">West</span>
                    </div>
                    <div className="rounded-3xl bg-grey-10 shrink-0 flex flex-row items-center justify-center py-1 px-2 border-[1px] border-solid border-grey-10">
                      <span className="relative">Parking</span>
                    </div>
                  </div>
                </div>
                <div className="w-[301px] shrink-0 flex flex-row items-center justify-end gap-[23px] text-grey-100">
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">66 job</div>
                  </div>
                  <div className="shrink-0 flex flex-row items-start justify-start">
                    <div className="relative font-medium">356 hrs.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
