RUN:=yarn

#-------------------------------------------- FUNCTIONS ---------------------------------------------------------------#
define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./$(1)/node_modules
endef

define delete_dependencies_build
	@echo delete_build $(1)
	rm -Rf ./$(1)/dist
endef

define delete_in_project
	@echo delete_in_project $(1) item $(2)
	rm -Rf ./$(1)/$(2)
endef

define run_project
	@echo run_project $(1) action $(2)
	cd ./$(1) && $(RUN) $(2)
endef
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- CLEAN --------------------------------------------------------------#
clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_in_project,packages/business,node_modules)
	$(call delete_in_project,packages/services,node_modules)
	$(call delete_in_project,packages/ui,node_modules)
	$(call delete_in_project,packages/eslint-config,node_modules)

clean-builds:
	$(call delete_in_project,packages/business,dist)
	$(call delete_in_project,packages/services,dist)
	$(call delete_in_project,packages/typescript-config,dist)
	$(call delete_in_project,packages/ui,dist)

clean-all: clean-dependencies clean-builds
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- BUILD --------------------------------------------------------------#
build:
	turbo build

nest-build:
	$(call run_project,apps/nest-api,build)

next-build:
	$(call run_project,apps/web,build)

vite-build:
	$(call run_project,apps/react-vite,build)

business-build:
	$(call run_project,packages/business,build)

services-build:
	$(call run_project,packages/services,build)

ui-build:
	$(call run_project,packages/ui,build)

build-dependencies:
	make business-build
	make services-build

#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- INSTALL ------------------------------------------------------------#
install:
	yarn
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- DEV ----------------------------------------------------------------#
dev:
	turbo dev

nest-dev:
	$(call run_project,apps/nest-api,dev)

next-dev:
	$(call run_project,apps/web,dev)

vite-dev:
	$(call run_project,apps/react-vite,dev)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- LINT ---------------------------------------------------------------#
lint:
	turbo lint

nest-lint:
	$(call run_project,apps/nest-api,lint)

next-lint:
	$(call run_project,apps/web,lint)

vite-lint:
	$(call run_project,apps/react-vite,lint)

business-lint:
	$(call run_project,packages/business,lint)

services-lint:
	$(call run_project,packages/services,lint)

ui-lint:
	$(call run_project,packages/ui,lint)
#------------------------------------------------- END ----------------------------------------------------------------#

setup:
	make clean-all
	make install
	make build-dependencies