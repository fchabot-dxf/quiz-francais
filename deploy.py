import os
import subprocess
import sys

def run_command(command, description):
    print(f"🚀 {description}...")
    try:
        # Use shell=True for Windows compatibility with npx
        result = subprocess.run(command, shell=True, check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during {description}: {e}")
        return False

def deploy():
    print("\n--- Cloudflare Pages Deployment ---\n")
    
    # 1. Check for npx
    if not run_command("npx --version", "Checking for Node.js/npx"):
        print("Aborting: npx is required for Cloudflare Wrangler.")
        sys.exit(1)

    # 2. Deploy to Cloudflare Pages
    # Project name is quiz-francais
    # Current directory (.) is the root
    project_name = "quiz-francais"
    
    print(f"📦 Deploying to {project_name}.pages.dev...")
    
    # We use npx wrangler to avoid global installation requirements
    # Note: If this is the first time, wrangler will ask you to login.
    command = f"npx wrangler pages deploy html --project-name {project_name}"
    
    if run_command(command, "Uploading files to Cloudflare"):
        print("\n✅ Deployment successful!")
        print(f"🔗 URL: https://{project_name}.pages.dev")
    else:
        print("\n❌ Deployment failed.")
        sys.exit(1)

if __name__ == "__main__":
    deploy()
