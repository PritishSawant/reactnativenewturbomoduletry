import {TurboModule, TurboModuleRegistry} from 'react-native';

interface Spec extends TurboModule {
  calculateSum(a: number, b: number): number;

  calculateSub(a: number, b: number): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Calculator');
