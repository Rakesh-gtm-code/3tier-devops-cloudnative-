🛰️ DevOps & Cloud-Native Workflow
1. **Infrastructure Provisioning**: Cloud infrastructure is fully automated using **Terraform**.
2. **CI Pipeline**: **GitHub Actions** triggers on every push, builds Docker images, scans them for vulnerabilities, and pushes them to a container registry.
3. **CD & GitOps**: **ArgoCD** monitors the `k8s` directory and automatically synchronizes the state of the Kubernetes cluster with the repository.

---

## 🛠️ Tech Stack & Tools

| Component | Technology Used | Purpose |
| :--- | :--- | :--- |
| **Infrastructure** | Terraform | Infrastructure as Code (IaC) |
| **Orchestration** | Kubernetes (K8s) | Container Orchestration & Scaling |
| **GitOps Engine** | ArgoCD | Declarative Continuous Delivery |
| **CI Automation** | GitHub Actions | Automated Build & Test Pipelines |
| **Containerization**| Docker | Application Packaging |

---

## 📂 Directory Structure

```text
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline definitions
├── app/
│   ├── frontend/           # Presentation layer source code
│   └── backend/            # Business logic / API layer source code
├── argocd/                 # ArgoCD Application manifests for GitOps deployment
├── k8s/                    # Kubernetes manifests (Deployments, Services, Ingress, DB)
└── terraform/              # IaC configuration files for provisioning cloud resources
```

### 📄 Detailed File & Folder Explanation

*   **`.github/workflows/`**: Isme YAML configuration files hain jo automatic integration pipelines setup karti hain. Jaise hi aap code commit karenge, ye pipeline automated testing aur docker build shuru kar degi.
*   **`app/`**: Application ka core source code yahan resides karta hai. Yeh application code base ko presentation (frontend) aur data handling (backend) me divide karta hai.
*   **`argocd/`**: GitOps practice ko follow karne ke liye declarations hain. Ye cluster state ko is GitHub repo ke code ke sath live sync me rakhta hai.
*   **`k8s/`**: Kubernetes resources files (`deployment.yaml`, `service.yaml`, `ingress.yaml`) jo pod scaling, internal network routing, aur database persistence control karti hain.
*   **`terraform/`**: Multi-tier infrastructure resources (VPC, Subnets, IAM roles, Managed Kubernetes Cluster jaise EKS/GKE) ko single-click me deploy karne ki scripts.

---

## 🚀 How to Run the Project (Step-by-Step)

### 📋 Prerequisites
Befor starting, make sure you have the following installed:
*   [Docker](https://docker.com)
*   [Terraform](https://terraform.io)
*   [Kubectl](https://kubernetes.io)
*   [Minikube](https://k8s.io) or a Cloud Provider Account (AWS/Azure/GCP)

---

### Step 1: Provision Infrastructure using Terraform
Navigate to the terraform directory, initialize the backend, and apply the configuration:
```bash
cd terraform
terraform init
terraform plan
terraform apply --auto-approve
```

### Step 2: Build & Package the Application
Go to the application folder to build Docker images (Note: GitHub Actions will do this automatically on code push, but for local testing):
```bash
cd ../app
docker build -t your-dockerhub-username/3tier-backend:latest ./backend
docker build -t your-dockerhub-username/3tier-frontend:latest ./frontend
```

### Step 3: Configure Kubernetes Cluster
Ensure your `kubectl` context points to your cluster, then apply the database and application manifests:
```bash
cd ../k8s
kubectl apply -f database-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
```

### Step 4: Setup GitOps with ArgoCD
Install ArgoCD inside your cluster and apply the app-of-apps or individual application manifest from the `argocd/` folder:
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://githubusercontent.com

# Apply the project configuration
cd ../argocd
kubectl apply -f application.yaml
```

---

## 🎯 Conclusion

This **3-Tier Cloud-Native** architecture showcases how modern software applications are developed, shipped, and maintained. By decoupling the layers (Frontend, Backend, Database), the application gains independent scaling capabilities. Integrating **Terraform**, **GitHub Actions**, and **ArgoCD** removes human error from the deployment phase, ensuring true **Continuous Delivery** with production-ready security standards.

---
⭐ **If you find this project helpful, please give it a Star!**
