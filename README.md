# Survey Form Project

This project is a dynamic survey form built with React and Next.js. The form collects user responses to a series of questions and navigates through them, ensuring that users cannot proceed without selecting an answer. The answers are saved so that users can see their previous responses when navigating back.

## Features

- **Dynamic Question Navigation:** Users can navigate through questions using "Next" and "Back" buttons.
- **Answer Validation:** Users cannot proceed to the next question without selecting an answer.
- **Answer Persistence:** Answers are saved, allowing users to see their previous responses when navigating back.
- **Error Handling:** Displays an error message if the user tries to proceed without selecting an answer.
- **Form Submission:** On completion, the form redirects to a recommendation page with the collected answers as query parameters.

## Technologies Used

- **React:** For building the user interface.
- **Next.js:** For server-side rendering and routing.
- **CSS Modules:** For styling the components.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/survey-form.git
cd survey-form
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Navigate through the questions:**
   - Use the "Next" button to proceed to the next question.
   - Use the "Back" button to return to the previous question.

2. **Answer Validation:**
   - You must select an answer before proceeding to the next question.
   - An error message will be displayed if you try to proceed without selecting an answer.

3. **Form Submission:**
   - On the last question, provide your feedback and click "Submit Survey".
   - You will be redirected to the recommendation page with your answers as query parameters.

## Customization

- **Questions:** You can customize the questions in the `SurveyForm.tsx` file by modifying the `questions` array.
- **Titles:** You can customize the titles in the `SurveyForm.tsx` file by modifying the `titles` array.
- **Styles:** You can customize the styles in the `SurveyForm.module.css` file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.