import React from "react";
import {
  FaUserTie,
  FaFileDownload,
  FaChartPie,
  FaHandshake,
  FaChartBar,
  FaMoneyBillWave,
  FaHome,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

// Fake data for charts
const revenueData = [120, 160, 180, 140, 200, 220]; // e.g. in million TZS
const rentalStatus = { active: 35, vacant: 15 };

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FaUserTie size="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold text-yellow-500">
            ONETH | Investor Relations & Reports
          </h1>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Become an Investor
        </Button>
      </header>

      {/* Content */}
      <main className="flex-grow px-6 py-8 space-y-12">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            Why Invest in ONETH?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            ONETH CORPORATION is building the future of real estate, hospitality,
            and smart property services in Tanzania. Partner with us to gain
            returns while shaping modern communities.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaMoneyBillWave size="text-3xl text-green-500 mb-2 mx-auto" />
            <h3 className="font-bold text-xl">TZS 120M+</h3>
            <p className="text-gray-600 text-sm">Capital Raised</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaUserTie size="text-3xl text-yellow-500 mb-2 mx-auto" />
            <h3 className="font-bold text-xl">18 Investors</h3>
            <p className="text-gray-600 text-sm">Current Partners</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaHandshake size="text-3xl text-blue-500 mb-2 mx-auto" />
            <h3 className="font-bold text-xl">35%</h3>
            <p className="text-gray-600 text-sm">Equity Offered</p>
          </div>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">
            Investor Documents
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <span>Company Profile.pdf</span>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
                <FaFileDownload size="mr-2" />
                Download
              </Button>
            </li>
            <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <span>Investment Terms.docx</span>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm">
                <FaFileDownload size="mr-2" />
                Download
              </Button>
            </li>
          </ul>
        </section>

        {/* Reports & Analytics */}
        <section>
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">
            Performance Reports & Analytics
          </h2>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaChartBar size="text-3xl text-orange-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold">TZS 820M</h3>
              <p className="text-sm text-gray-600">Total Revenue (2025)</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaHome size="text-3xl text-blue-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold">35</h3>
              <p className="text-sm text-gray-600">Active Rentals</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaHome size="text-3xl text-red-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold">15</h3>
              <p className="text-sm text-gray-600">Vacant Properties</p>
            </div>
          </div>

          {/* Simple Bar Graph Simulation */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold mb-4 text-black">
              Monthly Revenue (TZS M)
            </h4>
            <div className="flex space-x-4 items-end h-40">
              {revenueData.map((amount, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-6 bg-yellow-500"
                    style={{ height: `${amount / 2}px` }}
                  ></div>
                  <span className="text-sm mt-2">{amount}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs mt-2 text-gray-500">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-lg font-bold text-black">
            Fill Investment Interest Form
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-400 text-black text-center py-4 mt-10 shadow-inner">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} ONETH CORPORATION — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
