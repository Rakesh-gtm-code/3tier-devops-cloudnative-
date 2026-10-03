output "eks_cluster_name" {
  value = aws_eks_cluster.main.name
}

output "frontend_ecr_url" {
  value = aws_ecr_repository.frontend_repo.repository_url
}

output "backend_ecr_url" {
  value = aws_ecr_repository.backend_repo.repository_url
}
