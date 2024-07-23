use env_logger;

pub fn system_init(){
    env_logger::init_from_env(env_logger::Env::default().default_filter_or("info"));
}
