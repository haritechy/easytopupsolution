"use client";
import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import dashboardReducer from "@/redux/reducer/dashboardReducercount";
import { DashBoarddetailfetch } from "@/redux/actions/dashboardActions";

export function OverviewCardsGroup() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.dahsboardetail,
  );

  useEffect(() => {
    dispatch(DashBoarddetailfetch("1222"));
  }, [dispatch]);

  const {
    Balance = 0,
    DueAmount = 0,
    TotalTopup = 0,
    CostOfSales = 0,
    CostOfMonthlySales = 0,
  } = data && data.length > 0 ? data[0] : {};

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Your Due Amount"
        data={{
          value: "$" + compactFormat(DueAmount),
        }}
        Icon={icons.Views}
      />

      <OverviewCard
        label="Your Balance"
        data={{
          value: "$" + compactFormat(Balance),
        }}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Your Total Topup"
        data={{
          value: "$" + compactFormat(TotalTopup),
        }}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Total Cost of Sales"
        data={{
          value: "$" + compactFormat(CostOfSales),
        }}
        Icon={icons.Users}
      />

      <OverviewCard
        label="Total Cost of Monthly Sales"
        data={{
          value: "$" + compactFormat(CostOfMonthlySales),
        }}
        Icon={icons.Users}
      />
    </div>
  );
}
