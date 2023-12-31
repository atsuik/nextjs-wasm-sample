use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fib(n - 2) + fib(n - 1),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_fib0() {
        assert_eq!(0, fib(0))
    }
    #[test]
    fn test_fib1() {
        assert_eq!(1, fib(1))
    }
    #[test]
    fn test_fib3() {
        assert_eq!(2, fib(3))
    }
    #[test]
    fn test_fib5() {
        assert_eq!(5, fib(5))
    }
    #[test]
    fn test_fib20() {
        assert_eq!(6765, fib(20))
    }
}
