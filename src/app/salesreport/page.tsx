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
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";

const dummySalesReport = [
  { id: 1, product: "iPhone 15", units: 120, revenue: 120000, region: "USA" },
  { id: 2, product: "Samsung S23", units: 90, revenue: 80000, region: "India" },
];

const dummySummary = [
  { id: 1, metric: "Total Sales", value: "$200,000" },
  { id: 2, metric: "Total Cost", value: "$50,000" },
  { id: 3, metric: "Net Profit", value: "$150,000" },
];

const dummyDetails = [
  { id: 1, date: "2024-04-01", action: "Order Placed", by: "Customer A" },
  { id: 2, date: "2024-04-02", action: "Order Shipped", by: "Warehouse B" },
];

export default function MultiTabSection() {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    { id: "sales", label: "Sales Report" },
    { id: "summary", label: "Summary" },
    { id: "details", label: "Details" },
  ];

  return (
    <>
      <Breadcrumb pageName="My Sales Report" />
  
      <div className="px-4 py-6 md:px-8">

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

        {/* Sales Report */}
        {activeTab === "sales" && (
          <div className="grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              Sales Report
            </h2>
            <Table>
              <TableHeader>
                <TableRow className="text-xs uppercase sm:text-sm [&>th]:text-left">
                  <TableHead>Product</TableHead>
                  <TableHead>Units Sold</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Region</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummySalesReport.map((item) => (
                  <TableRow
                    key={item.id}
                    className="text-left text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                  >
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.units}</TableCell>
                    <TableCell>${item.revenue}</TableCell>
                    <TableCell>{item.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Summary */}
        {activeTab === "summary" && (
          <div className="grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              Total Summary
            </h2>
            <Table>
              <TableHeader>
                <TableRow className="text-xs uppercase sm:text-sm [&>th]:text-left">
                  <TableHead>Metric</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummySummary.map((item) => (
                  <TableRow
                    key={item.id}
                    className="text-left text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                  >
                    <TableCell>{item.metric}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Details */}
        {activeTab === "details" && (
          <div className="grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5">
            <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
              Details
            </h2>
            <Table>
              <TableHeader>
                <TableRow className="text-xs uppercase sm:text-sm [&>th]:text-left">
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Performed By</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyDetails.map((item) => (
                  <TableRow
                    key={item.id}
                    className="text-left text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                  >
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.action}</TableCell>
                    <TableCell>{item.by}</TableCell>
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
