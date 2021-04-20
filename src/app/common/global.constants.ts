export const HOME_SCREEN_MASTER_DATA = [
  {
    title: "Check Account Balance",
    img: "/assets/images/cash.svg"
  },
  {
    title: "Personalised Cash Withdrawal",
    img: "/assets/images/withdrawal.svg"
  },
  {
    title: "Mini Statement",
    img: "/assets/images/statement.svg"
  },
  {
    title: "Change ATM/Debit card pin",
    img: "/assets/images/change-pin.svg"
  },
  {
    title: "Change Mobile Number",
    img: "/assets/images/phone-number.svg"
  }
];

export const DASHBOARD_MASTER_DATA = {
  rightSection: [
    {
      title: "Cash Withdrawal",
      img: "/assets/images/fast-cash.svg",
      subTitle: "Withdrawal money from your account"
    },
    {
      title: "Fast Cash",
      img: "/assets/images/withdrawal.svg",
      subTitle: "Get fast cash of selected values"
    },
    {
      title: "Cash Deposit",
      img: "/assets/images/deposit.svg",
      subTitle: "Deposit Cash into your account here"
    },
    {
      title: "Change PIN",
      img: "/assets/images/change-pin.svg",
      subTitle: "Change your ATM/Debit Card PIN"
    }
  ],
  leftSection: [
    {
      title: "Transfer Funds",
      img: "/assets/images/transfer.svg",
      subTitle: "Transfer Fund to another account"
    },
    {
      title: "Balance Enquiry",
      img: "/assets/images/cash.svg",
      subTitle: "Check the balance of your account"
    },
    {
      title: "Mini Statement",
      img: "/assets/images/statement.svg",
      subTitle: "Get statement of your account"
    },
    {
      title: "Payment (General)",
      img: "/assets/images/payment.svg",
      subTitle: "Make your utility payment"
    }
  ]
};

export const ATM_PIN_CONFIG = {
  allowNumbersOnly: true,
  length: 4,
  isPasswordInput: true,
  disableAutoFocus: false,
  placeholder: "",
  inputStyles: {
    width: "50px",
    height: "50px"
  }
};
