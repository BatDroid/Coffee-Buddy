declare module "react-native-image-progress" {
  import React, { Component, Ref } from "react";
  import {
    ImageProps,
    ImagePropsBase,
    NativeSyntheticEvent,
    ImageErrorEventData,
    StyleProp,
    ImageStyle,
    ViewProps,
  } from "react-native";

  export interface ProgressImageProps extends ImageProps {
    errorContainerStyle?: StyleProp<ViewProps>;
    indicator?: any;
    indicatorContainerStyle?: StyleProp<ViewProps>;
    indicatorProps?: Record<string, any>;
    renderIndicator?: () => JSX.Element;
    renderError?: (
      image: NativeSyntheticEvent<ImageErrorEventData>,
    ) => JSX.Element;
    imageStyle?: StyleProp<ImageStyle>;
    threshold?: number;
  }

  export function createImageProgress<T>(
    image: JSX.Element,
  ): React.SFC<ProgressImageProps>;

  // eslint-disable-next-line
  const ImageProgress: React.SFC<ProgressImageProps>

  export default ImageProgress;
}
