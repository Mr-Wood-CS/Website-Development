# Python Outputs, Inputs and Variables

<table>
  <thead>
    <tr>
      <th>Learning Intention</th>
      <th>Success Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li>Learn how to display outputs in Python.</li>
          <li>Learn how to collect inputs from the user.</li>
          <li>Understand how variables store data in a program.</li>
          <li>Build simple Python programs using outputs, inputs and variables.</li>
        </ul>
      </td>
      <td>
        <p>By the end of this lesson you will be able to:</p>
        <ul>
          <li>Use <code>print()</code> to display messages.</li>
          <li>Use <code>input()</code> to ask the user questions.</li>
          <li>Store information in variables.</li>
          <li>Create a simple Python program using inputs and outputs.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

---

## Today's Keywords

<table class="keywords-table">
  <thead>
    <tr>
      <th>Keyword</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Output</td>
      <td>Information displayed by a program.</td>
    </tr>
    <tr>
      <td>Input</td>
      <td>Information sent from the user to the computer.</td>
    </tr>
    <tr>
      <td>Variable</td>
      <td>A named storage place for data in a program.</td>
    </tr>
    <tr>
      <td>Value</td>
      <td>The data stored inside a variable.</td>
    </tr>
  </tbody>
</table>

---

## What is Python?

Python is a powerful programming language.

It is used to create:

- Games
- Websites
- Apps
- Data tools
- Artificial intelligence programs

Python is popular because it is easier to read than many other programming languages.

---

## What is an Output?

An output is information displayed by the computer.

Programs use outputs to show messages, instructions, answers and results.

In Python, we display outputs using `print()`.

Example:

```python
print("Hello World")
```

This program displays the words:

```text
Hello World
```

---

## What is an Input?

An input is information sent from the user to the computer.

Programs often need information from the user to work properly.

Examples of inputs:

- Typing on a keyboard
- Clicking a mouse
- Speaking into a microphone
- Tapping a touchscreen

In Python, we ask for inputs using `input()`.

Example:

```python
input("What is your name? ")
```

This program:

1. Displays a question.
2. Waits for the user to type an answer.

---

## What is a Variable?

A variable is a named storage place used to store data in a program.

Programs use variables to remember information.

Examples of information a program might store:

- A player score in a game
- A username
- A password
- A high score

Example:

```python
name = "Mr Wood"
```

In this program:

| Part | Meaning |
|-----------|-----------|
| `name` | The variable name |
| `"Mr Wood"` | The value being stored |

You can think of a variable like a labelled box that stores information.

---

## Combining Inputs and Variables

Inputs become much more useful when we store them in variables.

Example:

```python
name = input("What is your name? ")
print(name)
```

### What Happens Here?

1. Python asks the user a question.
2. The user types an answer.
3. The answer is stored in the variable called `name`.
4. The program displays the stored answer.

Programs become much more useful when we combine:

- Inputs
- Variables
- Outputs

---

## Worked Example

Create a program that asks for the user's name and displays a greeting.

```python
name = input("What is your name? ")

print("Hello", name)
```

### Step-by-Step

1. The program asks the user for their name.
2. The answer is stored in the variable called `name`.
3. The program displays a greeting.
4. The stored name is displayed as part of the output.

---

# Programming Tasks

=== "Level 1"

    ### Task 1

    Display the message:

    ```text
    Hello World
    ```

    ### Task 2

    Display three separate messages about yourself.

    Your program should use three `print()` statements.

=== "Level 2"

    ### Task 3

    Ask the user for their name.

    Store their answer in a variable.

    Display their name back to them.

    ### Task 4

    Ask the user for their favourite game.

    Store their answer in a variable.

    Display a sentence that includes their favourite game.

=== "Level 3"

    ### Task 5

    Ask the user for:

    - Their name
    - Their age

    Store both answers in variables.

    Display both pieces of information back to the user.

    ### Task 6

    Ask the user for:

    - Their name
    - Their favourite food
    - Their favourite colour

    Display a short sentence using all three answers.

=== "Level 4"

    ### Task 7

    Create a simple profile program.

    Ask the user for:

    - Their name
    - Their age
    - Their favourite subject

    Display the information as a short profile.

    ### Task 8

    Create a simple quiz question.

    Ask the user a question and store their answer in a variable.

    Display their answer back to them in a sentence.

=== "Challenge"

    Create a mini chatbot.

    Your program should:

    - Ask the user at least four questions.
    - Store each answer in a variable.
    - Display a final message using the answers.

---

## Reflection

Before moving on, make sure you can:

- Explain the difference between an output, input and variable.
- Use `print()` to display information.
- Use `input()` to ask a question.
- Store user input in a variable.
- Combine inputs, variables and outputs in one program.
