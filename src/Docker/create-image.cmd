docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testovyjj/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testovyjj/app ../..
