use std::collections::HashMap;

pub fn solve(input: String) -> String {
    let mut out: HashMap<String, u8> = HashMap::new();
    let mut order: Vec<String> = Vec::new();

    for word in input.split(" ") {
        let word = word.to_lowercase();

        if let Some(counter) = out.get_mut(&word) {
            *counter += 1;
        } else {
            out.insert(word.clone(), 1);
            order.push(word);
        }
    }

    order
        .into_iter()
        .map(|word| format!("{word}{}", out.get(&word).unwrap()))
        .fold(String::new(), |p, v| p + &v)
}
