use std::process::ExitCode;

static INVALID_INPUT_ERROR: &str = "Provide an input to process.
The program returns the number of times each word appears in the message, regardless of whether it is in uppercase or lowercase.
The words are sorted by their first appearance in the message!

The result will be a text string with the word and the number of times it appears in the message, in this format:
`$word$count...`
Example: cat2dog3car1sun1
";

fn main() -> ExitCode {
    let args = match std::env::args().nth(1) {
        Some(a) => a,
        None => {
            eprintln!("{INVALID_INPUT_ERROR}");
            return ExitCode::FAILURE;
        }
    };

    let answer = challenge_01::solve(args);

    println!("{answer}");

    ExitCode::SUCCESS
}
