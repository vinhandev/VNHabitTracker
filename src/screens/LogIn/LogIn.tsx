import { Brand, FormInput } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { loginSchema } from '@/types/schemas/user';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTheme } from '@/theme';
import { Button, Icon, TouchableIcon } from '@/components/atoms';

type FormData = z.infer<typeof loginSchema>;

function LogIn() {
  const { components, layout, gutters } = useTheme();
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onValid = (data: FormData) => {};

  return (
    <SafeScreen>
      <View style={[components.container, layout.justifyCenter]}>
        <View style={components.center}>
          <Brand height={100} width={100} />
        </View>
        <View>
          <FormInput
            control={control}
            variant="text"
            name="email"
            label="Username"
            placeholder="Add your email"
          />
          <FormInput
            wrapStyle={[gutters.marginTop_20]}
            control={control}
            variant="password"
            name="password"
            label="Password"
            placeholder="Add your email"
          />
          <Button
            variant="primary"
            style={{
              marginTop: 70,
            }}
            onPress={handleSubmit(onValid)}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            style={{
              marginTop: 10,
            }}
            onPress={handleSubmit(onValid)}
          >
            Sign Up
          </Button>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableIcon name="apple" onPress={() => {}} />
            <TouchableIcon name="google" onPress={() => {}} />
            <TouchableIcon name="facebook" onPress={() => {}} />
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}
export default LogIn;
