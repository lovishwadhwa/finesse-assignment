import ShippingInfo from "./ShippingInfo";
import SizeGuide from "./SizeGuide";

const shippingInfo = {
  key: "shipping",
  label: "Shipping & Returns",
  children: <ShippingInfo />,
};

const sizingGuide = {
  key: "sizing",
  label: "Size Guide",
  children: <SizeGuide />,
};

export const constantCollapsableItems = [shippingInfo, sizingGuide];
