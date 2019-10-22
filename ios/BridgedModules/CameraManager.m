//
//  CameraManager.m
//  coffeeBuddy
//
//  Created by Alireza Ghamkhar on 7/30/1398 AP.
//  Copyright © 1398 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CameraManager, RCTEventEmitter)
RCT_EXTERN_METHOD(takeImage)
@end
