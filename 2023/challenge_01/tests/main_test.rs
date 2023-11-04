#[test]
fn basic_01() {
    const INPUT: &str = "cat dog dog car Cat doG sun";

    let answer = challenge_01::solve(INPUT.to_string());

    assert_eq!(answer, "cat2dog3car1sun1");
}

#[test]
fn basic_02() {
    const INPUT: &str = "keys house HOUSE house keys";

    let answer = challenge_01::solve(INPUT.to_string());

    assert_eq!(answer, "keys2house3");
}

#[test]
fn basic_03() {
    const INPUT: &str = "cup te a cup";

    let answer = challenge_01::solve(INPUT.to_string());

    assert_eq!(answer, "cup2te1a1");
}

#[test]
fn basic_04() {
    const INPUT: &str = "houses house housess";

    let answer = challenge_01::solve(INPUT.to_string());

    assert_eq!(answer, "houses1house1housess1");
}
