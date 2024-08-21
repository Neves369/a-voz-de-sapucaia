import React from "react";
import { ImageStyle } from "react-native";
import { IconElement } from "@ui-kitten/components";
import {
  Entypo,
  Feather,
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";

export const PersonIcon = (): IconElement => (
  <Ionicons name="person" size={20} color="white" />
);

export const CartIcon = (): IconElement => (
  <Entypo name="ticket" size={20} color="white" />
);

export const HeartIcon = (): IconElement => (
  <AntDesign name="heart" size={20} color="red" />
);

export const MessageCircleIcon = (): IconElement => (
  <AntDesign name="message1" size={20} color="white" />
);

export const MoreHorizontalIcon = (): IconElement => (
  <Feather name="more-horizontal" size={20} color="white" />
);

export const ArrowForwardIcon = (): IconElement => (
  <AntDesign name="arrowright" size={24} color="white" />
);

export const GoogleIcon = (): IconElement => (
  <AntDesign name="google" size={24} color="white" />
);

export const FacebookIcon = (): IconElement => (
  <FontAwesome name="facebook-f" size={24} color="white" />
);

export const TwitterIcon = (): IconElement => (
  <FontAwesome6 name="x-twitter" size={20} color="white" />
);

export const ArrowForwardIconOutline = (): IconElement => (
  <AntDesign name="arrowright" size={20} color="white" />
);

export const HeartIconFill = (): IconElement => (
  <AntDesign name="heart" size={20} color="white" />
);

export const CreditCardIcon = (): IconElement => (
  <AntDesign name="heart" size={20} color="white" />
);

export const MoreVerticalIcon = (): IconElement => (
  <Feather name="more-vertical" size={20} color="white" />
);
