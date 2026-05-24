# Konfigurasi provider Docker
# Provider ini memungkinkan Terraform mengelola Docker container
provider "docker" {
  host = "unix:///var/run/docker.sock"
}

# Resource: Container Redis
# Redis adalah database in-memory yang sering digunakan untuk caching
resource "docker_container" "redis" {
  name  = "redis-container"
  image = "redis:alpine"
}

# Resource: Container MySQL
# MySQL adalah database relasional yang umum digunakan
resource "docker_container" "mysql" {
  name  = "mysql-container"
  image = "mysql:5.7"
  env   = ["MYSQL_ROOT_PASSWORD=password123"]

  # Port mapping: akses MySQL dari luar lewat port 3307
  ports {
    internal = 3306
    external = 3307
  }
}
