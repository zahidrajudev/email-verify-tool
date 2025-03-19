import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuState, setMenuState] = useState(false);

  const [mainData, setMainData] = useState({
    item1: "Get More Clients By Scaling Your Email outreach",
    item2: "Expand your client base by implementing scalable strategies for cold email outreach, maximaizing your potential for grouth and success",
    item3: "Get Started",
    item4: "Learn More",
    item5: {
      part1: "Good",
      part2: "outreach",
      part3: "is only possible if you reach the",
      part4: "lead’s inbox.",
    },
    item6: "Our tool can be perfect chooise. Let's check your email.",
    item7: "Verified Email",
    item8: {
      part1: "0% Email Bounce Rate",
      part2: "100% Email Deliver to Inbox",
      part3: "7-Tier Email Verifier Process",
      part4: "Higher Customer Engagement",
      part5: "Better Sender Reputation",
      part6: "Reduce the Risk of Blacklisting",
    },
    item9: "Check Email",
    item10: "Unlock Superior Solutions For Your Business",
    item11: "Unlock superior solutions tailored for your business. Experience growth, efficiency and exceptional result with our expert services.",
    item12: {
      part1: "Personalize",
      part2: "Enhance customer experience with our personalization and loyalty through tailored solutions",
      part3: "Analytics",
      part4: "Gain valuable insights with our analytics services. Drive informed decisions, optimize performance and achieve measurable business growth.",
      part5: "24h Support",
      part6:
        "Experience reliable assistance with our 24h support. ensure seamless operations, resolve issues quickly and maintain continous business productivity.",
    },
    item13: "Email Verification checks",
    item14: "We perform several checks when verifying emails.",
    item15: {
      part1: "Syntax Validation",
      part2: "Domain Verification",
      part3: "MX Record Verification",
      part4: "Catch-All Verification",
      part5: "Greylisting Verification",
      part6: "Gibberish Check",
      part7: "Duplicate Removal",
      part8: "Block Verification",
      part9: "Disposable Email Verification",
      part10: "Role Account Verification",
      part11: "Free Account Verification",
      part12: "Mail Quota Verification",
    },
    item16: "How it works & what you get",
    item17: "Expected email outcomes",
    item18: "These are results you receive when verifying emails.",
    item19: {
      part1: "Valid",
      part2: "Confirms an email address as active and reachable, marking it reliable for communication.",
      part3: "Invalid",
      part4: "Flags invalid emails due to non-existent servers, recipients' absence, or incorrect syntax.",
      part5: "Accept-All",
      part6: "Indicates potential risk due to catch-all servers whose responsiveness may be uncertain.",
      part7: "Unknown",
      part8: "Signifies an email status as unsure possibly due to server connectivity or configuration issues.",
      part9: "Error",
      part10: "A temporary outcome denoting that verification is in progress due to a large email list.",
    },
    item20: {
      part1: "With our unique validation technique, we are verifying the most difficult addresses including",
      part2: "Gmail,Yahoo, Hotmail, Outlook, Msn, Aol",
      part3: "and almost all other custom business domains.",
    },
    item21: "Our Tool",
    item22: "Accurancy: 100%",
    item23: "Other Tool",
    item24: "Accurancy: 90%",
    item25: "Success Focused Cold Email Crafting",
    item26: "Acheivement-centric cold email crafting for impactful communication",
    item27: {
      part1: "24M",
      part2: "Total User",
      part3: "20k",
      part4: "Patners",
      part5: "4.9/5",
      part6: "User Rate",
    },
    item28: {
      part1: "Bulk Email Verifier",
      part2:
        "Sending emails to invalid email addresses increases bounce rate and thereby damages your sender reputation. Clearout's bulk email checker helps you verify large volumes of email addresses to clean your email list. What's more? We provide additional information on why an email is valid or invalid along with guaranteed deliverables to reduce your bounce rate to 3% or less.",
      part3: "Get 200 Check Free",
      part4: "/img/dashboard.webp",
    },

    item29: {
      part1: "Quick Email Verification",
      part2:
        "Quickly verify single email address with our accurate email checker tool. Just input the email address you want to verify, click on validate and let Clearout do its magic. We test your email address on multiple validation checks without sending an email to the recipient. Maintain your list hygiene by adding only valid email addresses to your list.",
      part3: "Get 200 Check Free",
      part4: "/img/dashboard.webp",
    },
    item30: {
      part1: "Email Verifier API",
      part2:
        "Scale and automate your email verification needs using Clearout's email validation API. From solopreneurs to big enterprises, we've built our API for everyone. We support all programming languages so you can easily add our API to your tech stack and verify emails instantly or in bulk.",
      part3: "Get 200 Check Free",
      part4: "/img/dashboard.webp",
    },
  });

  return (
    <>
      <Head>
        <title>Email Verifiyer Tool</title>
      </Head>
      <div className="w-full min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="w-full space-y-5">
          <section className="flex flex-col gap-10 items-center bg-red-50 pt-10 md:pt-32 pb-64 p-3">
            <div className="max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex justify-center items-center">
                  <div className="grid grid-cols-1 gap-6">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-600 max-w-xl md:leading-14">Launch your email verification business today—</h1>
                    <h1 className="text-2xl md:text-4xl font-extrabold max-w-xl md:leading-14 text-orange-600">
                      Our clients are already earning $500k+ per year!—
                    </h1>
                    <p className="text-gray-400 max-w-xl text-xl">
                      Launch a profitable SaaS business with our powerful, ready-to-use email verification tool. Help businesses clean their email lists while
                      you generate steady income!
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full h-[600px] hidden">
                    <img
                      className="max-w-full max-h-full"
                      src="https://jthemes.net/themes/wp/elementor-kits/saasy/wp-content/uploads/2021/02/app-hero@2x-min-1.png"
                      alt=""
                    />
                  </div>

                  <div className="relative overflow-x-auto shadow-xl rounded p-0.5 ">
                    <table className="w-full text-left text-gray-500 text-xl">
                      <thead className=" text-gray-700  bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            #
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b   border-gray-200">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            1
                          </th>
                          <td className="px-6 py-4">name1@website.com</td>
                          <td className="px-6 py-4 text-green-600">Valid</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            2
                          </th>
                          <td className="px-6 py-4">name1@website.com</td>
                          <td className="px-6 py-4 text-red-600">invalid</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            3
                          </th>
                          <td className="px-6 py-4">name1@website.com</td>
                          <td className="px-6 py-4 text-yellow-600">Catch-All</td>
                        </tr>
                        <tr className="bg-white ">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            4
                          </th>
                          <td className="px-6 py-4">name1@website.com</td>
                          <td className="px-6 py-4 text-gray-600">Unknown</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-center relative z-20 pt-10 -mt-60 -mb-5">
            <div className="w-full max-w-7xl border border-gray-200 shadow-md rounded-2xl bg-white p-5">
              <div className="flex justify-center w-full">
                <section className="w-full  my-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-1 md:p-3">
                    <div className="flex justify-center py-10 relative z-[2] px-3 md:px-10 bg-gray-50 border-2 border-orange-100 rounded-2xl">
                      <div className="text-gray-700 font-bold text-xl md:text-3xl text-center leading-[1.3]">
                        Good
                        <span className="text-orange-600"> outreach </span>
                        is only possible if you reach the
                        <span className="text-orange-600"> lead’s inbox.</span>
                      </div>
                    </div>
                    <div className="flex justify-center py-10 relative z-[2] px-3 md:px-10 bg-gray-50 border-2 border-orange-100 rounded-2xl">
                      <div className="text-gray-700 font-bold text-xl md:text-3xl text-center leading-[1.3]">
                        Our tool can be perfect chooise. Let's check our algorithoms.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="flex justify-center w-full mb-5">
                <section className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  md:p-3">
                    <div className="relative bg-gray-50 border-2 border-orange-100 rounded-2xl">
                      <div className="relative z-[2] -mb-12 mt-8">
                        <div className="flex w-full justify-center items-center">
                          <div className="bg-orange-100 m-2 shadow-custom-1 rounded-2xl w-full max-w-xs text-orange-600 text-center font-semibold text-4xl pt-10 pb-20">
                            Verified Email
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-5 bg-red-50 relative z-[2] rounded-2xl p-1  md:p-4">
                        <div className="col-span-2 relative bg-gray-50 border-2 border-orange-100 rounded-2xl p-1 md:p-4">
                          <div className="relative z-[2] w-full">
                            <div className="text-2xl font-semibold text-gray-900">{mainData?.item17}</div>
                            <div className="font-semibold text-gray-700 pt-2">{mainData?.item18}</div>
                            <div className="grid grid-cols-1 pt-6 gap-9">
                              <div className="border border-orange-100 bg-green-600 rounded-2xl p-3">
                                <div className="flex gap-2 items-center">
                                  <div>{/* <SvgIcon NAME="check_circle" SIZE="size-6" FILL_COLOR="fill-orange-50" FILLED CLASS="text-white" /> */}</div>
                                  <div className="font-semibold text-xl text-white">{mainData?.item19?.part1}</div>
                                </div>
                                <div className=" text-gray-800 mt-3 px-3 py-2 rounded-2xl bg-green-200/30">{mainData?.item19?.part2}</div>
                              </div>
                              <div className="border border-orange-100 bg-orange-600 rounded-2xl p-3">
                                <div className="flex gap-2 items-center">
                                  <div>{/* <SvgIcon NAME="check_circle" SIZE="size-6" FILL_COLOR="fill-orange-50" FILLED CLASS="text-white" /> */}</div>
                                  <div className="font-semibold text-xl text-white">{mainData?.item19?.part3}</div>
                                </div>
                                <div className="text-gray-800 mt-3 px-3 py-2 rounded-2xl bg-orange-200/30">{mainData?.item19?.part4}</div>
                              </div>
                              <div className="border border-orange-100 bg-yellow-600 rounded-2xl p-3">
                                <div className="flex gap-2 items-center">
                                  <div>{/* <SvgIcon NAME="check_circle" SIZE="size-6" FILL_COLOR="fill-orange-50" FILLED CLASS="text-white" /> */}</div>
                                  <div className="font-semibold text-xl text-white">{mainData?.item19?.part5}</div>
                                </div>
                                <div className="text-gray-800 mt-3 px-3 py-2 rounded-2xl bg-yellow-200/30">{mainData?.item19?.part6}</div>
                              </div>
                              <div className="border border-orange-100 bg-gray-600 rounded-2xl p-3">
                                <div className="flex gap-2 items-center">
                                  <div>{/* <SvgIcon NAME="check_circle" SIZE="size-6" FILL_COLOR="fill-orange-50" FILLED CLASS="text-white" /> */}</div>
                                  <div className="font-semibold text-xl text-white">{mainData?.item19?.part7}</div>
                                </div>
                                <div className=" text-gray-300 mt-3 px-3 py-2 rounded-2xl bg-gray-500">{mainData?.item19?.part8}</div>
                              </div>
                              <div className="border border-orange-100 bg-red-600 rounded-2xl p-3">
                                <div className="flex gap-2 items-center">
                                  <div>{/* <SvgIcon NAME="check_circle" SIZE="size-6" FILL_COLOR="fill-orange-50" FILLED CLASS="text-white" /> */}</div>
                                  <div className="font-semibold text-xl text-white">{mainData?.item19?.part9}</div>
                                </div>
                                <div className="text-gray-800 mt-3 px-3 py-2 rounded-2xl bg-red-200/30">{mainData?.item19?.part10}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative bg-gray-50  rounded-2xl p-2">
                      <div className="col-span-2 relative bg-gray-50 border-2 border-orange-100 rounded-2xl p-1 md:p-4">
                        <div className="relative z-[2] w-full">
                          <div className="text-2xl font-semibold text-gray-900">{mainData?.item13}</div>
                          <div className="font-semibold text-gray-700 pt-2">{mainData?.item14}</div>
                          <div className="grid grid-cols-1 pt-6 gap-9">
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part1}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part2}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part3}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part4}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part5}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part6}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part7}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part8}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part9}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part10}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part11}</div>
                              </div>
                            </div>
                            <div className="border-l-[20px] border-green-600 bg-orange-100/40 rounded-md px-4 py-2">
                              <div className="flex gap-2 items-center">
                                <div className="text-2xl text-green-800">{mainData?.item15?.part12}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-10 items-center bg-white pb-20 pt-40 p-2">
            <div className="container">
              <div className="text-center pb-14 text-xl md:text-4xl font-bold text-gray-700">Who Will Profit from Owning This Email Verification Tool?</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Entrepreneurs & Passive Income Seekers</h1>
                      <p className="text-gray-500">Start an automated email verification business and earn recurring revenue with minimal effort.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Digital Marketers & Email Marketers </h1>
                      <p className="text-gray-500">Reduce bounce rates, improve email deliverability, and sell verification as a service.</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Freelancers & Side Hustlers </h1>
                      <p className="text-gray-500">Offer email validation as a service on Fiverr, Upwork, or your own website and generate extra income.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">SaaS Owners & Developers </h1>
                      <p className="text-gray-500">Add email verification as a feature to an existing SaaS product and attract more customers.​</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Marketing Agencies & Lead Generation Experts </h1>
                      <p className="text-gray-500">Ensure high-quality email lists for better campaign results and offer verification to clients.​</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Web Hosting & Domain Providers </h1>
                      <p className="text-gray-500">Offer email verification as an add-on service to increase revenue per customer.​</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Affiliate Marketers & Bloggers </h1>
                      <p className="text-gray-500">Promote email verification services, earn commissions, or integrate them into existing platforms.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">eCommerce & Business Owners </h1>
                      <p className="text-gray-500">Reduce fake sign-ups and improve customer engagement by verifying emails at registration.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Cold Email & Sales Teams </h1>
                      <p className="text-gray-500">Avoid spam traps and increase the success rate of outbound email campaigns.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Recruiters & HR Professionals</h1>
                      <p className="text-gray-500">Verify candidate emails to prevent fake applications and maintain a high-quality database.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Data Brokers & List Sellers </h1>
                      <p className="text-gray-500">Clean and validate email lists before selling them to customers.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white shadow-lg shadow-red-50 rounded-2xl border border-red-50 hover:shadow-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="size-20 bg-pink-50 rounded flex items-center justify-center text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="currentColor">
                          <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <h1 className="text-orange-600 text-xl font-bold">Anyone Looking to Make Passive Income Online </h1>
                      <p className="text-gray-500">A ready-made, high-demand web application that you can sell as a service with little maintenance!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
              <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                <h2 className="text-title text-4xl font-medium lg:text-5xl">Our Email Verifiyer Tool</h2>
                <p className="text-body">Get More Clients By Scaling Your Email outreach</p>
              </div>

              <div className="grid gap-12 divide-y md:divide-y-0 md:divide-x *:text-center md:grid-cols-3 md:gap-2">
                <div className="space-y-4">
                  <div className="text-title text-5xl font-bold">+200</div>
                  <p className="text-body">Integrations</p>
                </div>
                <div className="space-y-4">
                  <div className="text-title text-5xl font-bold">+700</div>
                  <p className="text-body">Happy Customers</p>
                </div>
                <div className="space-y-4">
                  <div className="text-title text-5xl font-bold">100%</div>
                  <p className="text-body">Success Rate</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-10 items-center bg-red-50 py-10">
            <div className="container">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                          <pattern id="07690130-d013-42bc-83f4-90de7ac68f76" x="0" y="0" width=".135" height=".30">
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)" width="52" height="24" />
                      </svg>
                      <span className="relative">What</span>
                    </span>{" "}
                    You Get (Features & Benefits)
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Unlock superior solutions tailored for your business. Experience growth, efficiency and exceptional result with our expert services.
                  </p>
                </div>
                <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                  <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Complete Email Verification Platform</h6>
                        <p className="text-sm text-gray-900">
                          A fully functional, ready-to-sell web application that verifies emails in bulk and in real time.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">100% White-Label & Custom Branding </h6>
                        <p className="text-sm text-gray-900">Use your own logo, domain, and brand identity to make it truly yours.</p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Automated Email Verification</h6>
                        <p className="text-sm text-gray-900">Checks for invalid, fake, and disposable emails using advanced algorithms.</p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Recurring Revenue Model</h6>
                        <p className="text-sm text-gray-900">Charge users per verification by credits point with flexible plans.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">High-Speed Bulk Verification</h6>
                        <p className="text-sm text-gray-900">Process thousands of emails within minutes with our optimized system.</p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Admin Dashboard & User Management</h6>
                        <p className="text-sm text-gray-900"> Track user activity, manage subscriptions, and analyze revenue with an intuitive dashboard.</p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Integrated Payment System</h6>
                        <p className="text-sm text-gray-900">
                          Accept payments via Stripe, PayPal, Binance, Bkash, Nagad gateways to monetize your service easily.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                          <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
                            <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-3 text-xl font-bold leading-5">Scalable & Secure Infrastructure</h6>
                        <p className="text-sm text-gray-900">Built with cutting-edge technology to handle large volumes while ensuring data security.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
