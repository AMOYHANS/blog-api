# Step 1: 使用带有 Node.js 的基础镜像
FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /usr/src/app

# 复制所有文件到容器中
COPY . .

# 安装项目依赖
RUN npm i -g pnpm && pnpm install && pnpx prisma migrate dev --name init 

# Step 2: 运行时使用更精简的基础镜像
FROM node:18-alpine

# 创建 runc 的符号链接
RUN ln -s /sbin/runc /usr/bin/runc

WORKDIR /usr/src/app

# 从 builder 阶段复制构建好的文件
COPY --from=builder /usr/src/app/client ./client
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma

# 暴露 3000 端口
EXPOSE 3000

# 运行 Nest.js 应用程序
CMD ["node", "dist/main"]
