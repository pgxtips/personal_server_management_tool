use askama::Template;

#[derive(Template)]
#[template(path = "web_app/dashboard_system/dashboard_system.html")] 
pub struct DashboardSystemTemplate;

#[derive(Template)]
#[template(path = "web_app/dashboard_projects/dashboard_projects.html")] 
pub struct DashboardProjectsTemplate;

#[derive(Template)]
#[template(path = "web_app/dashboard_firewall/dashboard_firewall.html")] 
pub struct DashboardFirewallTemplate;

#[derive(Template)]
#[template(path = "web_app/dashboard_docker/dashboard_docker.html")] 
pub struct DashboardDockerTemplate;
