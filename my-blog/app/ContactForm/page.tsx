"use client";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import {
  Button,
  NumberInput,
  Container,
  Textarea,
  Box,
  Autocomplete,
} from "@mantine/core";

export default function ContactForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-20 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color"
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register"
      ),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <Container
      size="lg"
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
          fontSize: "1.5rem",
          width: "50%",
        }}
      >
        Do you have any idea on a post you would want us to write? Tell us your
        ideas by submitting the form below!
      </Box>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Textarea
          label="Name"
          placeholder="Name"
          withAsterisk
          size="lg"
          radius="md"
          {...form.getInputProps("name")}
        />
        <Textarea
          label="Your job"
          placeholder="Your job"
          withAsterisk
          size="md"
          autosize
          {...form.getInputProps("job")}
        />
        <Textarea
          label="Your email"
          placeholder="Your email"
          withAsterisk
          size="md"
          autosize
          {...form.getInputProps("email")}
        />
        <NumberInput
          label="Your age"
          placeholder="Your age"
          withAsterisk
          size="md"
          {...form.getInputProps("age")}
          required
          min={18}
          max={99}
          allowNegative={false}
        />

        <Button type="submit" size="md">
          Submit
        </Button>
      </form>
    </Container>
  );
}
