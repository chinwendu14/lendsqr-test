import {
  home,
  userfriend,
  grad,
  loan,
  handshake,
  piggybank,
  loanrequest,
  usercheck,
  usertime,
  briefcase,
  saveprodt,
  coins,
  trans,
  galaxy,
  usercog,
  scoll,
  chatbar,
  slider,
  badge,
  clipboard,
} from "../../assets";
const List = [
  {
    text: "Dashboard",
    img: home,
    lk: "#",
  },
  { hd: "CUSTOMERS" },
  {
    text: "Users",
    lk: "/dashboard/user",

    img: userfriend,
  },
  {
    text: "Guarantors",
    lk: "#",
    img: grad,
  },

  {
    text: "Loan",
    lk: "#",
    img: loan,
  },
  {
    text: "Decision Models",
    lk: "#",
    img: handshake,
  },
  {
    text: "Savings",
    lk: "#",
    img: piggybank,
  },
  {
    text: "Loan Requests",
    lk: "#",
    img: loanrequest,
  },
  {
    text: "Whitelist",
    lk: "#",
    img: usercheck,
  },
  {
    text: "Karma",
    lk: "#",
    img: usertime,
  },
  { hd: "BUSINESSES" },
  {
    text: "Organization",
    lk: "#",
    img: briefcase,
  },
  {
    text: "Loan Products",
    lk: "#",
    img: loanrequest,
  },
  {
    text: "Savings Products",
    lk: "#",
    img: saveprodt,
  },
  {
    text: "Fees and Charges",
    lk: "#",
    img: coins,
  },
  {
    text: "Transactions",
    lk: "#",
    img: trans,
  },
  {
    text: "Services",
    lk: "#",
    img: galaxy,
  },
  {
    text: "Service Account",
    lk: "#",
    img: usercog,
  },
  {
    text: "Settlements",
    lk: "#",
    img: scoll,
  },
  {
    text: "Reports",
    lk: "#",
    img: chatbar,
  },
  { hd: "SETTINGS" },

  {
    text: "Preferences",
    lk: "#",
    img: slider,
  },
  {
    text: "Fees and Pricing",
    lk: "#",
    img: badge,
  },
  {
    text: "Audit Logs",
    lk: "#",
    img: clipboard,
  },
];
export default List;
