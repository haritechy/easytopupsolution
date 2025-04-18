"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopChannels } from "@/components/Tables/top-channels";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const dummyTopupSummary = [
  {
    id: 1,
    country: "India",
    topups: 1200,
    revenue: 890,
    successRate: "92%",
    provider: "Airtel",
    avgTopupValue: "$0.74",
  },
  {
    id: 2,
    country: "USA",
    topups: 980,
    revenue: 1100,
    successRate: "87%",
    provider: "Verizon",
    avgTopupValue: "$1.12",
  },
];

const dummyRechargeHistory = [
  {
    id: 1,
    mobile: "9876543210",
    date: "2024-03-01",
    status: "Success",
    operator: "Jio",
    amount: "$4.00",
    plan: "1GB/Day - 28 Days",
  },
  {
    id: 2,
    mobile: "8765432109",
    date: "2024-03-05",
    status: "Failed",
    operator: "BSNL",
    amount: "$2.50",
    plan: "500MB - 14 Days",
  },
];

export default function MultiTabSection() {
  const [activeTab, setActiveTab] = useState("order");
  const [orderType, setOrderType] = useState("easytop");

  const tabs = [
    { id: "order", label: "My Easy Order" },
    { id: "topup", label: "Topup Summary" },
    { id: "recharge", label: "Recharge History" },
  ];

  return (
    <>
      <Breadcrumb pageName="My Account" />
      <div className="px-4 py-6 md:px-8">
        {/* Tabs */}
        <div className="mb-5 flex gap-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm font-medium sm:text-base ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "order" && (
          <div className="rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              My Easy Order
            </h2>

            {/* Button group */}
            <div className="mb-6 flex gap-4">
              {["easytop", "quickpay", "autoref"].map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`rounded px-4 py-2 text-sm font-semibold capitalize transition-all duration-200 ${
                    orderType === type
                      ? "bg-primary text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white"
                  }`}
                >
                  {type === "easytop" && "EasyTop"}
                  {type === "quickpay" && "QuickPay"}
                  {type === "autoref" && "AutoRefill"}
                </button>
              ))}
            </div>

            {/* Conditional content */}
            {orderType === "easytop" && (
              <div className="text-sm text-gray-700 dark:text-white">
                QuickPay details go here.
              </div>
            )}
            {orderType === "quickpay" && (
              <div className="text-sm text-gray-700 dark:text-white">
                QuickPay details go here.
              </div>
            )}
            {orderType === "autoref" && (
              <div className="text-sm text-gray-700 dark:text-white">
                AutoRefill settings go here.
              </div>
            )}
          </div>
        )}

        {activeTab === "topup" && (
          <div className="grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              Topup Summary
            </h2>
            <Table>
              <TableHeader>
                <TableRow className="text-xs uppercase sm:text-sm [&>th]:text-left">
                  <TableHead className="text-left">Country</TableHead>
                  <TableHead>Total Topups</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Success Rate</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Avg Topup Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyTopupSummary.map((item) => (
                  <TableRow
                    className="text-left text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                    key={item.id}
                  >
                    <TableCell className="text-left">{item.country}</TableCell>
                    <TableCell>{item.topups}</TableCell>
                    <TableCell>${item.revenue}</TableCell>
                    <TableCell>{item.successRate}</TableCell>
                    <TableCell>{item.provider}</TableCell>
                    <TableCell>{item.avgTopupValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {activeTab === "recharge" && (
          <div className="grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              Recharge History
            </h2>
            <Table>
              <TableHeader>
                <TableRow className="text-xs uppercase sm:text-sm [&>th]:text-left">
                  <TableHead className="text-left">Mobile</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Operator</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyRechargeHistory.map((item) => (
                  <TableRow
                    className="text-left text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                    key={item.id}
                  >
                    <TableCell className="text-left">{item.mobile}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.operator}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.plan}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}
