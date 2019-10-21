import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';

export const ProgressImage = createImageProgress((FastImage as unknown) as JSX.Element);