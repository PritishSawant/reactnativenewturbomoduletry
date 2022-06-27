package com.myapp.newarchitecture.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.myapp.codegen.NativeCalculatorSpec;

import java.util.Map;
import java.util.HashMap;

public class Calculator extends NativeCalculatorSpec {

    public final static String NAME = "Calculator";

    public Calculator(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public double calculateSum(double a, double b) {
        return a+b;
    }

    @Override
    public void calculateSub(double a, double b, Promise promise) {
        promise.resolve(a-b);
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }
}
